import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ContinueWorking() {
    const navigate = useNavigate();

    return (
        <section className="rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-600/20 to-violet-600/20 p-8">

            <h2 className="text-2xl font-bold text-white">
                Continue Working
            </h2>

            <p className="mt-3 text-slate-300">
                Continue analyzing or translating your latest stories.
            </p>

            <button
                onClick={() => navigate("/library")}
                className="mt-6 flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white transition hover:bg-indigo-500"
            >
                Open Library
                <FiArrowRight />
            </button>

        </section>
    );
}