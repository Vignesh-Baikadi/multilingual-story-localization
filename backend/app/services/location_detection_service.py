class LocationDetectionService:

    LOCATION_KEYWORDS = [
        "village",
        "city",
        "forest",
        "kingdom",
        "castle",
        "river",
        "mountain",
        "ocean",
        "temple",
        "school",
    ]

    @staticmethod
    def detect(text: str):
        text = text.lower()

        locations = []

        for location in (
            LocationDetectionService.LOCATION_KEYWORDS
        ):
            if location in text:
                locations.append(location)

        return locations