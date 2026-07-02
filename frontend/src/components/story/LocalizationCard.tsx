import { FiGlobe, FiLoader } from "react-icons/fi";
import { useLocalization } from "../../hooks/useLocalization";

interface Props {
    storyId: number;
}

const languages = [
    "Telugu",
    "Hindi",
    "Tamil",
    "Kannada",
    "Malayalam",
    "English",
    "French",
    "German",
    "Japanese",
    "Spanish",
];

export default function LocalizationCard({
    storyId,
}: Props) {
    const {
        language,
        setLanguage,
        localizedText,
        loading,
        translate,
    } = useLocalization(storyId);

    return (
        <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

            <div className="mb-6 flex items-center gap-3">
                <FiGlobe className="text-indigo-400" size={22} />
                <h2 className="text-2xl font-bold text-white">
                    Localization
                </h2>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row">

                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="rounded-xl border border-white/10 bg-[#1b2233] px-4 py-3 text-white outline-none"
                >
                    {languages.map((item) => (
                        <option key={item}>
                            {item}
                        </option>
                    ))}
                </select>

                <button
                    onClick={translate}
                    disabled={loading}
                    className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500 disabled:opacity-50"
                >
                    {loading ? (
                        <span className="flex items-center gap-2">
                            <FiLoader className="animate-spin" />
                            Translating...
                        </span>
                    ) : (
                        "Translate"
                    )}
                </button>

            </div>

            {localizedText && (
                <div className="mt-6 rounded-xl border border-white/10 bg-[#0f172a] p-5">
                    <p className="whitespace-pre-wrap leading-8 text-slate-300">
                        {localizedText}
                    </p>
                </div>
            )}

        </section>
    );
}