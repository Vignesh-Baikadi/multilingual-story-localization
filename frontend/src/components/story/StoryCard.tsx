import { FiArrowRight, FiBookOpen } from "react-icons/fi";
import type { Story } from "../../hooks/useStories";
import { useNavigate } from "react-router-dom";


interface StoryCardProps {
    story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/story/${story.id}`)}
            className="
                cursor-pointer
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-indigo-500/40
                hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]
            "
        >
            <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-indigo-600 p-4 text-white">
                    <FiBookOpen size={24} />
                </div>

                <div className="flex-1">

                    <h3 className="text-xl font-semibold text-white">
                        {story.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                        {story.uploaded_file_name ?? "Manual Story"}
                    </p>

                </div>

                <button className="rounded-xl bg-indigo-600 p-3 text-white hover:bg-indigo-500">
                    <FiArrowRight />
                </button>

            </div>
        </div>
    );
}