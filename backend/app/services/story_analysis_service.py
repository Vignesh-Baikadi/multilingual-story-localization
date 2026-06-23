import re

from app.services.theme_detection_service import (ThemeDetectionService)
from app.services.genre_detection_service import (GenreDetectionService)

class StoryAnalysisService:

    @staticmethod
    def analyze(text: str):
        words = text.split()

        characters = []

        for word in words:
            if (
                word.istitle()
                and len(word) > 2
            ):
                characters.append(word)

        characters = list(
            set(characters)
        )

        return {
            "word_count": len(words),
            "character_count": len(text),
            "characters": characters[:20],
            "themes": ThemeDetectionService.detect(text),
            "genre": GenreDetectionService.detect(text),
        }