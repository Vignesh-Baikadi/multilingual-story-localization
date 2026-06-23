from sqlalchemy.orm import Session

from app.db.models.story import Story
from app.schemas.story import StoryCreate


class StoryRepository:

    @staticmethod
    def create(db: Session, story_data: StoryCreate) -> Story:
        story = Story(
            title=story_data.title,
            original_text=story_data.original_text,
        )

        db.add(story)
        db.commit()
        db.refresh(story)

        return story

    @staticmethod
    def get_all(db: Session):
        return db.query(Story).order_by(Story.created_at.desc()).all()

    @staticmethod
    def get_by_id(db: Session, story_id: int):
        return db.query(Story).filter(
            Story.id == story_id
        ).first()