from sqlalchemy.orm import Session
from app.db.models.story import Story

from app.repositories.story_repository import StoryRepository
from app.schemas.story import StoryCreate
from app.db.models.ai_analysis import AIAnalysis
from app.db.models.localization import Localization


class StoryService:

    @staticmethod
    def create_story(
        db: Session,
        story_data: StoryCreate
    ):
        return StoryRepository.create(
            db,
            story_data
        )

    @staticmethod
    def get_all_stories(db: Session):

        stories = (
            db.query(Story)
            .order_by(Story.created_at.desc())
            .all()
        )

        result = []

        for story in stories:

            has_analysis = (
                db.query(AIAnalysis)
                .filter(AIAnalysis.story_id == story.id)
                .first()
                is not None
            )

            localization_count = (
                db.query(Localization)
                .filter(Localization.story_id == story.id)
                .count()
            )

            result.append({
                "id": story.id,
                "title": story.title,
                "original_text": story.original_text,
                "uploaded_file_name": story.uploaded_file_name,

                "has_analysis": has_analysis,
                "has_localization": localization_count > 0,
                "localization_count": localization_count,

                "created_at": story.created_at,
                "updated_at": story.updated_at,
            })

        return result
    
    @staticmethod
    def get_story_model(
        db: Session,
        story_id: int,
    ):
        return (
            db.query(Story)
            .filter(Story.id == story_id)
            .first()
        )

    @staticmethod

    def get_story(
        
        db: Session,
        story_id: int
    ):
        # Fetch story
        story = StoryService.get_story_model(
            db,
            story_id,
        )
        story = (
            db.query(Story)
            .filter(Story.id == story_id)
            .first()
        )

        if not story:
            return None

        # Check whether AI analysis exists
        has_analysis = (
            db.query(AIAnalysis)
            .filter(AIAnalysis.story_id == story.id)
            .first()
            is not None
        )

        # Count saved localizations
        localization_count = (
            db.query(Localization)
            .filter(Localization.story_id == story.id)
            .count()
        )

        return {
            "id": story.id,
            "title": story.title,
            "original_text": story.original_text,
            "uploaded_file_name": story.uploaded_file_name,

            "has_analysis": has_analysis,
            "has_localization": localization_count > 0,
            "localization_count": localization_count,

            "created_at": story.created_at,
            "updated_at": story.updated_at,
        }
    
    @staticmethod
    def create_uploaded_story(
        db: Session,
        title: str,
        text: str,
        filename: str
    ):
        story = Story(
            title=title,
            original_text=text,
            uploaded_file_name=filename
        )

        db.add(story)
        db.commit()
        db.refresh(story)

        return story