class GenreDetectionService:

    GENRE_KEYWORDS = {
        "Fantasy": [
            "dragon",
            "magic",
            "kingdom",
            "wizard",
        ],
        "Sci-Fi": [
            "robot",
            "space",
            "future",
            "planet",
        ],
        "Mystery": [
            "murder",
            "clue",
            "detective",
        ],
        "Romance": [
            "love",
            "heart",
            "marriage",
        ],
        "Action": [
            "battle",
            "fight",
            "war",
        ],
    }

    @staticmethod
    def detect(text: str):
        text = text.lower()

        scores = {}

        for genre, keywords in (
            GenreDetectionService.GENRE_KEYWORDS.items()
        ):
            scores[genre] = sum(
                text.count(keyword)
                for keyword in keywords
            )

        return max(
            scores,
            key=scores.get
        )