import os

from dotenv import load_dotenv
from google import genai

load_dotenv()


class GeminiService:

    client = genai.Client(
        api_key=os.getenv("GEMINI_API_KEY")
    )

    model = "gemini-2.5-flash"

    @staticmethod
    def generate(prompt: str) -> str:
        response = GeminiService.client.models.generate_content(
            model=GeminiService.model,
            contents=prompt,
        )

        return response.text