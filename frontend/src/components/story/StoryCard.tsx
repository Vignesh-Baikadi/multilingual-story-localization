import {
    FiArrowRight,
    FiBookOpen,
    FiCalendar,
    FiFileText,
    FiCheckCircle,
} from "react-icons/fi";
import type { Story } from "../../hooks/useStories";
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
            className="
               group
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
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-5">
                  <div
                      className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          bg-gradient-to-br
                          from-indigo-500
                          to-violet-600
                          text-white
                      "
                  >
                      <FiBookOpen size={24} />
                  </div>
                  <div>
                      <div className="flex items-center gap-3">
                          <h3 className="text-xl font-semibold text-white">
                              {story.title}
                          </h3>
                          <span
                              className="
                                  rounded-full
                                  bg-emerald-500/20
                                  px-3
                                  py-1
                                  text-xs
                                  font-medium
                                  text-emerald-400
                              "
                          >
                              AI Ready
                          </span>
                      </div>
                      <div className="mt-5 space-y-2">
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                              <FiFileText />
                              <span>
                                  {story.uploaded_file_name ?? "Manual Story"}
                              </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                              <FiCalendar />
                              <span>
                                  {formattedDate}
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div
                  className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-indigo-600
                      transition-all
                      duration-300
                      group-hover:scale-110
                  "
              >
                  <FiArrowRight size={20} />
              </div>
          </div>
          <div className="my-6 border-t border-white/10" />
          <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-emerald-400">
                  <FiCheckCircle />
                  Ready for AI Analysis
              </div>
              <span className="text-sm text-slate-400">
                  View Details
              </span>
          </div>
        </div>
    );
}