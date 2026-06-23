from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Multilingual Story Localization API",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
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