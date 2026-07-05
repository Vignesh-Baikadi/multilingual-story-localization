import {
    FiBookOpen,
    FiCpu,
    FiGlobe,
    FiUploadCloud,
    FiTrash2,
} from "react-icons/fi";


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

export default function HistoryList() {

    const navigate = useNavigate();
    const { history } = useHistory();

    if (history.length === 0) {
        return (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

                <h2 className="text-2xl font-semibold text-white">
                    No History
                </h2>

                <p className="mt-3 text-slate-400">
                    Open a story to see it here.
                </p>

            </div>
        );
    }

    return (
        <div className="space-y-5">

            {history.map((story) => (

                <div
                    key={story.id}
                    className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-indigo-500/30"
                >

                    <div className="flex items-center gap-5">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white">
                            {getIcon(story.type)}
                        </div>

                        <div>

                            <h3 className="text-lg font-semibold text-white">
                                {story.title}
                            </h3>

                            <p className="mt-1 text-sm text-slate-400">
                                {new Date(story.timestamp).toLocaleString()}
                            </p>

                        </div>

                    </div>

                    <div className="flex gap-3">

                        <button
                            onClick={() => navigate(`/story/${story.id}`)}
                            className="rounded-xl bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-500"
                        >
                            Open
                        </button>

                        <button
                            className="rounded-xl border border-red-500/30 p-3 text-red-400 transition hover:bg-red-500/10"
                        >
                            <FiTrash2 />
                        </button>

                    </div>

                </div>

            ))}

        </div>
    );
}