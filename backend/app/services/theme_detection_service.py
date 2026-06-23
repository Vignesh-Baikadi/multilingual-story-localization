class ThemeDetectionService:

    THEME_KEYWORDS = {
        "Adventure": [
            "journey",
            "quest",
            "travel",
            "explore",
            "adventure",
        ],
        "Friendship": [
            "friend",
            "friends",
            "together",
            "team",
        ],
        "Love": [
            "love",
            "romance",
            "heart",
            "marry",
        ],
        "War": [
            "battle",
            "war",
            "fight",
            "army",
        ],
        "Magic": [
            "magic",
            "wizard",
            "spell",
            "dragon",
        ],
    }

    @staticmethod
    def detect(text: str):
        text = text.lower()

        detected_themes = []

        for theme, keywords in (
            ThemeDetectionService.THEME_KEYWORDS.items()
        ):
            if any(
                keyword in text
                for keyword in keywords
            ):
                detected_themes.append(theme)

        return detected_themes