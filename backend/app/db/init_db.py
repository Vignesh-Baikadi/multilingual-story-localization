from app.db.database import Base
from app.db.database import engine

from app.db.models.story import Story
from app.db.models.localization import Localization
from app.db.models.ai_analysis import AIAnalysis


def create_tables():
    """
    Create all database tables.
    """

    Base.metadata.create_all(bind=engine)