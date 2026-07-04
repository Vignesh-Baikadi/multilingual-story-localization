import { FiArrowRight, FiUploadCloud } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function DashboardHero() {
    const navigate = useNavigate();
    return (
        <section
            className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-gradient-to-r
                from-indigo-600/20
                via-slate-900
                to-purple-600/20
                p-10
            "
        >
            {/* Decorative background glow */}
            <div
                className="
                    absolute
                    -right-20
                    -top-20
                    h-60
                    w-60
                    rounded-full
                    bg-indigo-500/20
                    blur-3xl
                "
            />

            <div className="relative flex items-center justify-between">

                <div>

                    <p className="text-indigo-400">
                        👋 Welcome Back
                    </p>

                    <h1 className="mt-3 max-w-xl text-4xl font-bold text-white">
                        Create, Analyze & Localize Stories using AI
                    </h1>

                    <p className="mt-4 max-w-lg text-slate-400">
                        Upload stories, analyze characters and themes,
                        and translate them into multiple languages
                        using Gemini AI.
                    </p>

                </div>

                <button
                    onClick={() => navigate("/upload")}
                    className="flex items-center gap-3 rounded-2xl bg-indigo-600 px-6 py-4 font-semibold text-white transition hover:scale-105 hover:bg-indigo-500"
                >
                    <FiUploadCloud size={20} />
                    Upload Story
                    <FiArrowRight />
                </button>

            </div>
        </section>
    );
}