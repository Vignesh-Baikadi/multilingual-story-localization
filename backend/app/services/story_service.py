from sqlalchemy.orm import Session
from app.db.models.story import Story

from app.repositories.story_repository import StoryRepository
from app.schemas.story import StoryCreate


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
        return StoryRepository.get_all(db)

    @staticmethod
    def get_story(
        db: Session,
        story_id: int
    ):
        return StoryRepository.get_by_id(
            db,
            story_id
        )
    
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