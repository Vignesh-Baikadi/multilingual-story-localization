import os
import json


from app.services.gemini_service import (GeminiService)
from app.schemas.ai_analysis import (AIAnalysisResponse)


from fastapi import UploadFile
from fastapi import File
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session
from app.core.logger import logger
from app.utils.pdf_parser import extract_text_from_pdf
from app.utils.txt_parser import extract_text_from_txt
from app.utils.file_utils import generate_unique_filename
from app.db.database import get_db
from app.schemas.story import StoryCreate
from app.schemas.story import StoryResponse
from app.schemas.story import StoryPreviewResponse
from app.services.story_service import StoryService
from app.schemas.analysis import ( StoryAnalysisResponse,)
from app.services.story_analysis_service import (StoryAnalysisService,)
from app.prompts.analysis_prompt import (ANALYSIS_PROMPT)
from app.services.localization_service import (LocalizationService)
from app.services.localization_storage_service import (LocalizationStorageService)

router = APIRouter(
    prefix="/stories",
    tags=["Stories"]
)


@router.post(
    "/",
    response_model=StoryResponse
)
def create_story(
    story: StoryCreate,
    db: Session = Depends(get_db)
):
    return StoryService.create_story(
        db,
        story
    )


@router.get(
    "/",
    response_model=list[StoryResponse]
)
def get_all_stories(
    db: Session = Depends(get_db)
):
    return StoryService.get_all_stories(db)


#
@router.get(
    "/{story_id}",
    response_model=StoryResponse
)
def get_story(
    story_id: int,
    db: Session = Depends(get_db)
):
    story = StoryService.get_story(
        db,
        story_id
    )

    if not story:
        raise HTTPException(
            status_code=404,
            detail="Story not found"
        )

    return story


# Preview of the story
@router.get(
    "/{story_id}/preview",
    response_model=StoryPreviewResponse
)
def preview_story(
    story_id: int,
    db: Session = Depends(get_db)
):
    story = StoryService.get_story(
        db,
        story_id
    )

    if not story:
        raise HTTPException(
            status_code=404,
            detail="Story not found"
        )

    return {
        "id": story.id,
        "title": story.title,
        "preview": story.original_text[:1000]
    }


# Local analysis
@router.get(
    "/{story_id}/analysis",
    response_model=StoryAnalysisResponse
)
def analyze_story(
    story_id: int,
    db: Session = Depends(get_db)
):
    story = StoryService.get_story(
        db,
        story_id
    )

    if not story:
        raise HTTPException(
            status_code=404,
            detail="Story not found"
        )

    return StoryAnalysisService.analyze(
        story.original_text
    )

# Analysis By Gemini
@router.get(
    "/{story_id}/ai-analysis",
    response_model=AIAnalysisResponse
)
def ai_analysis(
    story_id: int,
    db: Session = Depends(get_db)
):
    story = StoryService.get_story(
        db,
        story_id
    )

    if not story:
        raise HTTPException(
            status_code=404,
            detail="Story not found"
        )

    prompt = ANALYSIS_PROMPT.format(
        story=story.original_text
    )

    response = (
        GeminiService.generate(
            prompt
        )
    )

    cleaned = (
        response
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )

    return json.loads(
        cleaned
    )


#Localize
@router.get(
    "/{story_id}/localize/{language}"
)
def localize_story(
    story_id: int,
    language: str,
    db: Session = Depends(get_db)
):
    story = StoryService.get_story(
        db,
        story_id
    )

    if not story:
        raise HTTPException(
            status_code=404,
            detail="Story not found"
        )

    existing = (
        LocalizationStorageService
        .get_localization(
            db,
            story_id,
            language
        )
    )

    if existing:
        return {
            "language": language,
            "localized_story":
                existing.localized_text
        }
    localized_story = (
        LocalizationService.localize(
            story.original_text,
            language
        )
    )
    LocalizationStorageService.create_localization(
        db,
        story_id,
        language,
        localized_story
    )

    return {
        "language": language,
        "localized_story": localized_story
    }


# Upload of txt and pdf files
@router.post("/upload")
async def upload_story(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    """
    Upload PDF or TXT story.
    """

    allowed_extensions = [
        ".pdf",
        ".txt"
    ]

    extension = os.path.splitext(
        file.filename
    )[1].lower()

    MAX_FILE_SIZE = 10 * 1024 * 1024

    if extension not in allowed_extensions:
        raise HTTPException(
            status_code=400,
            detail="Only PDF and TXT files allowed"
        )

    unique_filename = generate_unique_filename(
        file.filename
    )
    upload_path = f"uploads/{unique_filename}"

    contents = await file.read()

    if len(contents) > MAX_FILE_SIZE:
        raise HTTPException(
            status_code=400,
            detail="File exceeds 10MB limit"
        )

    with open(
        upload_path,
        "wb"
    ) as buffer:
        buffer.write(contents)

    if extension == ".pdf":
        extracted_text = extract_text_from_pdf(
            upload_path
        )
    else:
        extracted_text = extract_text_from_txt(
            upload_path
        )

    story = StoryService.create_uploaded_story(
        db=db,
        title=file.filename,
        text=extracted_text,
        filename=unique_filename
    )
    logger.info(
        f"Story uploaded successfully: {file.filename}"
    )

    return {
        "id": story.id,
        "filename": story.uploaded_file_name,
        "text_length": len(extracted_text),
        "preview": extracted_text[:500]
    }