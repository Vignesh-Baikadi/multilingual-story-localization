from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    ForeignKey
)

from app.db.database import Base


class Localization(Base):

    __tablename__ = "localizations"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    story_id = Column(
        Integer,
        ForeignKey("stories.id")
    )

    language = Column(
        String,
        nullable=False
    )

    localized_text = Column(
        Text,
        nullable=False
    )