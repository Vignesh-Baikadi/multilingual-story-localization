import {
    FiBookOpen,
    FiCalendar,
    FiFileText,
} from "react-icons/fi";

import type { Story } from "../../hooks/useStory";

interface StoryHeaderProps {
    story: Story;
}

export default function StoryHeader({
    story,
}: StoryHeaderProps) {
    const formattedDate = new Date(
        story.created_at
    ).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <section
            className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
            "
        >
            <div className="flex items-start justify-between">

                <div className="flex items-start gap-5">

                    <div
                        className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-gradient-to-br
                            from-indigo-500
                            to-violet-600
                            text-white
                        "
                    >
                        <FiBookOpen size={28} />
                    </div>

                    <div>

                        <h1 className="text-3xl font-bold text-white">
                            {story.title}
                        </h1>

                        <div className="mt-5 space-y-3">

                            <div className="flex items-center gap-2 text-slate-400">
                                <FiCalendar />
                                {formattedDate}
                            </div>

                            <div className="flex items-center gap-2 text-slate-400">
                                <FiFileText />
                                {story.uploaded_file_name ?? "Manual Story"}
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}