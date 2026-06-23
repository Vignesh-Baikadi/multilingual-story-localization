import google.generativeai as genai

from app.core.config import settings


genai.configure(
    api_key=settings.GEMINI_API_KEY
)


class GeminiService:

    model = genai.GenerativeModel(
        "gemini-2.5-flash"
    )

    @staticmethod
    def generate(
        prompt: str
    ):
        response = (
            GeminiService.model.generate_content(
                prompt
            )
        )

        return response.text