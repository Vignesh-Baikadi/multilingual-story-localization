from pydantic import BaseModel


class AIAnalysisResponse(BaseModel):
    title: str
    genre: str
    summary: str

    characters: list[str]
    locations: list[str]
    themes: list[str]

    sentiment: str
    reading_level: str
    target_audience: str

    keywords: list[str]

    writing_style: str
    story_length: str
    estimated_reading_time: str

    class Config:
        from_attributes = True