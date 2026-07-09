import { FiArrowRight, FiBookOpen, FiCpu, FiGlobe, FiUploadCloud } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useHistory } from "../../hooks/useHistory";

function getIcon(type: string) {
    switch (type) {
        case "analysis":
            return <FiCpu size={22} />;
        case "localization":
            return <FiGlobe size={22} />;
        case "upload":
            return <FiUploadCloud size={22} />;
        default:
            return <FiBookOpen size={22} />;
    }
}

export default function RecentStories() {
    const { history } = useHistory();
    const navigate = useNavigate();

    if (history.length === 0) {
        return (
            <div>
            <h1 className="text-2xl font-bold text-white">
                    Recent Stories
                </h1>
            <section className="mt-10 rounded-3xl border border-dashed border-white/10 p-10 text-center">
                <h2 className="text-2xl font-semibold text-white">
                    No Recent Activity
                </h2>

                <p className="mt-3 text-slate-400">
                    Upload or open a story to get started.
                </p>
            </section>
        </div>
        );
    }
    return (
        <section className="mt-10">

            <div className="mb-6 flex items-center justify-between">

                <h2 className="text-2xl font-bold text-white">
                    Recent Stories
                </h2>

                <button
                    onClick={() => navigate("/history")}
                    className="text-indigo-400 hover:text-indigo-300"
                >
                    View All
                </button>

            </div>

            
            <div className="space-y-4">
                
                {history.slice(0, 5).map((story) => (
                    <div
                        key={story.id}
                        className="
                            flex
                            items-center
                            justify-between
                            rounded-3xl
                            border
                            border-white/10
                            bg-white/5
                            p-6
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            hover:border-indigo-500/40
                            hover:shadow-[0_0_25px_rgba(99,102,241,.25)]
                        "
                    >

                        <div className="flex items-center gap-5">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                                {getIcon(story.type)}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    {story.title}
                                </h3>
                                <p className="mt-1 text-sm text-slate-400">
                                    {story.action}
                                </p>
                                <p className="text-xs text-slate-500">
                                    {new Date(story.timestamp).toLocaleString()}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() =>
                                navigate(`/story/${story.id}`)
                            }
                            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white transition hover:bg-indigo-500"
                        >
                            View
                            <FiArrowRight />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}