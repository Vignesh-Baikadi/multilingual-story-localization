from pydantic import BaseModel


class AIAnalysisResponse(
    BaseModel
):
    characters: list[str]
    locations: list[str]
    themes: list[str]
    genre: str