import json

from sqlalchemy.orm import Session

from app.db.models.story import Story
from app.db.models.ai_analysis import AIAnalysis
from app.prompts.analysis_prompt import ANALYSIS_PROMPT
from app.services.gemini_service import GeminiService


class AIAnalysisService:

    @staticmethod
    def generate(db: Session, story_id: int):

        existing = (
            db.query(AIAnalysis)
            .filter(AIAnalysis.story_id == story_id)
            .first()
        )

        if existing:
            return existing

        story = (
            db.query(Story)
            .filter(Story.id == story_id)
            .first()
        )

        if not story:
            return None

        prompt = ANALYSIS_PROMPT.format(
            story=story.original_text
        )

        try:
            response = GeminiService.generate(prompt)
        except Exception as e:
            raise Exception(
                f"Gemini analysis failed: {str(e)}"
            )

        cleaned = (
            response
            .replace("```json", "")
            .replace("```", "")
            .strip()
        )

        data = json.loads(cleaned)
        if not data.get("title"):
            data["title"] = story.title

        if not data.get("genre"):
            data["genre"] = ""

        if not data.get("summary"):
            data["summary"] = ""

        if not isinstance(data.get("characters"), list):
            data["characters"] = []

        if not isinstance(data.get("locations"), list):
            data["locations"] = []

        if not isinstance(data.get("themes"), list):
            data["themes"] = []

        if not data.get("sentiment"):
            data["sentiment"] = ""

        if not data.get("reading_level"):
            data["reading_level"] = ""

        if not data.get("target_audience"):
            data["target_audience"] = ""

        if not isinstance(data.get("keywords"), list):
            data["keywords"] = []

        if not data.get("writing_style"):
            data["writing_style"] = ""

        if not data.get("story_length"):
            data["story_length"] = ""

        if not data.get("estimated_reading_time"):
            data["estimated_reading_time"] = ""

        analysis = AIAnalysis(
            story_id=story.id,
            **data,
        )

        db.add(analysis)
        db.commit()
        db.refresh(analysis)

        return analysis
    


    @staticmethod
    def get(
        db: Session,
        story_id: int,
    ):
        """
        Returns cached AI analysis if it exists.
        Does not call Gemini.
        """

        return (
            db.query(AIAnalysis)
            .filter(AIAnalysis.story_id == story_id)
            .first()
        )
    