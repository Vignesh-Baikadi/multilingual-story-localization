from sqlalchemy import (
    Column,
    Integer,
    String,
    ForeignKey,
    DateTime,
)
from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy.sql import func
from sqlalchemy import Text

from app.db.database import Base


class AIAnalysis(Base):

    __tablename__ = "ai_analysis"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    story_id = Column(
        Integer,
        ForeignKey("stories.id"),
        unique=True,
        nullable=False,
    )

    title = Column(
        String,
        nullable=False,
    )

    genre = Column(
        String,
        nullable=False,
    )

    summary = Column(
        Text,
        nullable=False,
    )

    characters = Column(
        JSON,
        nullable=False,
        default=list,
    )

    locations = Column(
        JSON,
        nullable=False,
        default=list,
    )

    themes = Column(
        JSON,
        nullable=False,
        default=list,
    )

    sentiment = Column(
        String,
        nullable=False,
    )

    reading_level = Column(
        String,
        nullable=False,
    )

    target_audience = Column(
        String,
        nullable=False,
    )

    keywords = Column(
        JSON,
        nullable=False,
        default=list,
    )

    writing_style = Column(
        String,
        nullable=False,
    )

    story_length = Column(
        String,
        nullable=False,
    )

    estimated_reading_time = Column(
        String,
        nullable=False,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )