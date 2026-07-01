import { FiBook } from "react-icons/fi";

interface StoryContentProps {
    content: string;
}

export default function StoryContent({
    content,
}: StoryContentProps) {
    return (
        <section
            className="
                mt-8
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
            "
        >
            <div className="mb-6 flex items-center gap-3">

                <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-indigo-500
                        to-violet-600
                        text-white
                    "
                >
                    <FiBook size={22} />
                </div>

                <div>

                    <h2 className="text-2xl font-semibold text-white">
                        Original Story
                    </h2>

                    <p className="text-sm text-slate-400">
                        Uploaded content
                    </p>

                </div>

            </div>

            <div
                className="
                    max-h-[600px]
                    overflow-y-auto
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/10
                    p-8
                "
            >
                <p
                    className="
                        whitespace-pre-wrap
                        text-lg
                        leading-9
                        text-slate-300
                    "
                >
                    {content}
                </p>
            </div>

        </section>
    );
}