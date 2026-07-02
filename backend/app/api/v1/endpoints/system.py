from fastapi import APIRouter

router = APIRouter(
    prefix="/system",
    tags=["System"],
)

@router.get("/health")
def health():
    """
    Returns application health information.
    """

    return {
        "status": "Online",
        "api_version": "v1",
        "backend": "FastAPI",
        "database": "PostgreSQL",
        "ai_provider": "Google Gemini",
        "environment": "Development",
    }