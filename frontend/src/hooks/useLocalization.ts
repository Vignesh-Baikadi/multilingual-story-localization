import { useState } from "react";
import { localizeStory } from "../services/storyService";

export function useLocalization(storyId: number) {
    const [language, setLanguage] = useState("Telugu");
    const [localizedText, setLocalizedText] = useState("");
    const [loading, setLoading] = useState(false);

    async function translate() {
        try {
            setLoading(true);

            const data = await localizeStory(
                storyId,
                language
            );

            setLocalizedText(
                data.localized_story
            );
        } finally {
            setLoading(false);
        }
    }

    return {
        language,
        setLanguage,
        localizedText,
        loading,
        translate,
    };
}