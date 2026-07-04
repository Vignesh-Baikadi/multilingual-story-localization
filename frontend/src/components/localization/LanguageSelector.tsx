interface Props {
    language: string;
    setLanguage: (value: string) => void;
}

const languages = [
    "Telugu",
    "Hindi",
    "Tamil",
    "Kannada",
    "Malayalam",
    "French",
    "German",
    "Spanish",
    "Japanese",
];

export default function LanguageSelector({
    language,
    setLanguage,
}: Props) {
    return (
        <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-40 px-4 py-3 rounded-xl border border-white/10 bg-[#11151F] p-3 text-white outline-none"
        >
            {languages.map((item) => (
                <option key={item}>
                    {item}
                </option>
            ))}
        </select>
    );
}