import {
    FiArrowRight,
    FiBookOpen,
    FiCalendar,
    FiFileText,
    FiCheckCircle,
} from "react-icons/fi";
import type { Story } from "../../hooks/useStory";
import { useNavigate } from "react-router-dom";


interface StoryCardProps {
    story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  const navigate = useNavigate();
  const formattedDate = new Date(
      story.created_at
  ).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
  });
    return (
        <div
            onClick={() => navigate(`/story/${story.id}`)}
            className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-indigo-500/40 hover:shadow-[0_0_25px_rgba(99,102,241,.2)]"
        >
            <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                        <FiBookOpen size={22} />
                    </div>

                    <div>

                        <div className="flex items-center gap-3">
                            <h3 className="text-lg font-semibold text-white">
                                {story.title}
                            </h3>

                            <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-400">
                                AI Ready
                            </span>
                        </div>

                        <div className="mt-2 flex flex-wrap items-center gap-5 text-sm text-slate-400">

                            <div className="flex items-center gap-2">
                                <FiFileText />
                                <span>{story.uploaded_file_name ?? "Manual Story"}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <FiCalendar />
                                <span>{formattedDate}</span>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="flex items-center gap-3">

                    <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs text-indigo-300">
                        Localizations: 0
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 transition group-hover:scale-110">
                        <FiArrowRight size={18} />
                    </div>

                </div>

            </div>
        </div>
    );
}