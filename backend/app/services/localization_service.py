from app.prompts.localization_prompt import (LOCALIZATION_PROMPT)
from app.services.gemini_service import (GeminiService)


class LocalizationService:
    @staticmethod
    def localize(
        story: str,
        language: str
    ):
        prompt = (
            LOCALIZATION_PROMPT.format(
                story=story,
                language=language
            )
        )

        return GeminiService.generate(
            prompt
        )