from app.db.database import Base
from app.db.database import engine

from app.db.models.story import Story


def create_tables():
    """
    Create all database tables.
    """

    Base.metadata.create_all(bind=engine)