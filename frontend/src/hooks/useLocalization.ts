import { useState } from "react";
import { localizeStory } from "../services/storyService";
import { addHistory } from "../utils/historyStorage";


export function useLocalization(
    storyId: number,
    storyTitle: string
) {
    const [language, setLanguage] = useState("Telugu");
    const [localizedText, setLocalizedText] = useState("");
    const [loading, setLoading] = useState(false);

    async function translate() {
        try {
            setLoading(true);

            const data = await localizeStory(storyId,language);
            addHistory({
                id: storyId,
                title: storyTitle,
                type: "localization",
                action: `Localized to ${language}`,
            });
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