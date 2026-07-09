import { FiCopy, FiDownload, FiCheck } from "react-icons/fi";
import { useState } from "react";

interface Props {
    text: string;
}

export default function LocalizedStory({
    text,
}: Props) {
    if (!text) return null;


    const [copied, setCopied] = useState(false);
    async function handleCopy() {
        await navigator.clipboard.writeText(text);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    function downloadStory() {
        const blob = new Blob([text], {
            type: "text/plain",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "localized-story.txt";
        link.click();
        URL.revokeObjectURL(url);
    }

    return (
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-white/5 p-4">
                    <p className="text-xs text-slate-400">
                        Characters
                    </p>

                    <p className="mt-1 text-lg font-semibold text-white">
                        {text.length}
                    </p>
                </div>

                <div className="rounded-xl bg-white/5 p-4">
                    <p className="text-xs text-slate-400">
                        Words
                    </p>

                    <p className="mt-1 text-lg font-semibold text-white">
                        {text.split(/\s+/).length}
                    </p>
                </div>

                <div className="rounded-xl bg-white/5 p-4">
                    <p className="text-xs text-slate-400">
                        Reading Time
                    </p>

                    <p className="mt-1 text-lg font-semibold text-white">
                        {Math.max(
                            1,
                            Math.ceil(
                                text.split(/\s+/).length / 200
                            )
                        )} min
                    </p>
                </div>

            </div>
            <div className="mb-5 flex items-center justify-between">
                
                <h3 className="text-lg font-semibold text-white">
                    Localized Story
                </h3>
                <div >
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-white transition hover:border-indigo-500 "
                    >
                        {copied ? <FiCheck /> : <FiCopy />}
                        {copied ? "Copied" : "Copy"}
                    </button>
                    <button
                        onClick={downloadStory}
                        className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-white transition hover:border-indigo-500"
                    >
                        <FiDownload />
                        Download
                    </button>
                </div>
            </div>

            <p className="whitespace-pre-wrap leading-8 text-slate-300">
                {text}
            </p>

        </div>
    );
}