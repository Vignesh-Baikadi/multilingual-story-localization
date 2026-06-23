from fastapi import FastAPI

from app.db.init_db import create_tables
from app.api.v1.endpoints.story import router as story_router

app = FastAPI(
    title="Multilingual Story Localization API",
    version="1.0.0"
)

@app.on_event("startup")
def startup():
    create_tables()


app.include_router(
    story_router,
    prefix="/api/v1"
)


@app.get("/")
def health_check():
    return {
        "message": "API Running Successfully"
    }