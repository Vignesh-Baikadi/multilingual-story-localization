from app.db.models.localization import Localization

class LocalizationStorageService:

    @staticmethod
    def get_localization(
        db,
        story_id,
        language
    ):
        return (
            db.query(Localization)
            .filter(
                Localization.story_id == story_id,
                Localization.language == language
            )
            .first()
        )

    @staticmethod
    def create_localization(
        db,
        story_id,
        language,
        text
    ):
        localization = Localization(
            story_id=story_id,
            language=language,
            localized_text=text
        )

        db.add(localization)
        db.commit()
        db.refresh(localization)

        return localization