import { FiCopy } from "react-icons/fi";

interface Props {
    text: string;
}

export default function LocalizedStory({
    text,
}: Props) {
    if (!text) return null;

    return (
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">

            <div className="mb-5 flex items-center justify-between">

                <h3 className="text-lg font-semibold text-white">
                    Localized Story
                </h3>

                <button
                    onClick={() => navigator.clipboard.writeText(text)}
                    className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-white hover:border-indigo-500"
                >
                    <FiCopy />
                    Copy
                </button>

            </div>

            <p className="whitespace-pre-wrap leading-8 text-slate-300">
                {text}
            </p>

        </div>
    );
}