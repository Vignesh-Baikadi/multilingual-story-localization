import { FiGlobe } from "react-icons/fi";

import LanguageSelector from "./LanguageSelector";
import LocalizedStory from "./LocalizedStory";
import { useLocalization } from "../../hooks/useLocalization";

interface Props {
    storyId: number;
    storyTitle: string;
}

export default function LocalizationCard({
    storyId,storyTitle
}: Props) {
    const {
        language,
        setLanguage,
        localizedText,
        loading,
        translate,
    } = useLocalization(storyId,storyTitle);

    return (
        <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="mb-6 flex items-center gap-3">

                <FiGlobe
                    size={24}
                    className="text-indigo-400"
                />

                <h2 className="text-2xl font-bold text-white">
                    Localization
                </h2>

            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_auto]">

                <LanguageSelector
                    language={language}
                    setLanguage={setLanguage}
                />

                <button
                    onClick={translate}
                    disabled={loading}
                    className="rounded-xl bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-500 disabled:opacity-60"
                >
                    {loading
                        ? "Translating..."
                        : "Translate"}
                </button>
                {loading && (
                    <p className="mt-4 text-sm text-indigo-400">
                        AI is translating your story...
                    </p>
                )}
            </div>

            <LocalizedStory
                text={localizedText}
            />

        </section>
    );
}