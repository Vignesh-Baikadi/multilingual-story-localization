from pydantic import BaseModel


class LocalizationResponse(
    BaseModel
):
    language: str

    localized_story: str