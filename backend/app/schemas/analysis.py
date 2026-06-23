from pydantic import BaseModel


class StoryAnalysisResponse(
    BaseModel
):
    word_count: int
    character_count: int
    characters: list[str]
    themes: list[str]
    genre: str