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
    

class StoryResponse(BaseModel):
    id: int
    title: str
    original_text: str
    uploaded_file_name: str | None
    created_at: datetime

    class Config:
        from_attributes = True
