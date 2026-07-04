from pydantic import BaseModel
from datetime import datetime


class StoryCreate(BaseModel):
    title: str
    original_text: str

class UploadResponse(BaseModel):
    id: int
    title: str
    original_text: str
    uploaded_file_name: str | None

    class Config:
        from_attributes = True


class StoryPreviewResponse(BaseModel):
    id: int
    title: str
    preview: str
    

from datetime import datetime
from pydantic import BaseModel, ConfigDict


class StoryResponse(BaseModel):
    id: int
    title: str
    original_text: str
    uploaded_file_name: str | None

    # Status fields
    has_analysis: bool = False
    has_localization: bool = False
    localization_count: int = 0

    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)