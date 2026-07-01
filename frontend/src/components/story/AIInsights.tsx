import {
    FiCpu,
    FiLoader,
    FiSlack,
} from "react-icons/fi";

import { useAIAnalysis } from "../../hooks/useAIAnalysis";
import AIAnalysisCard from "./AiAnalysisCard";

interface AIInsightsProps {
    storyId: number;
}

export default function AIInsights({
    storyId,
}: AIInsightsProps) {

    const {
        analysis,
        loading,
        generating,
        generate,
    } = useAIAnalysis(storyId);

    // Initial loading while checking cached analysis
    if (loading) {
        return (
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-slate-300">
                    <FiLoader className="animate-spin" />
                    Checking AI Insights...
                </div>
            </div>
        );
    }

    // No analysis exists yet
    if (!analysis) {
        return (
            <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                    <div className="rounded-2xl bg-indigo-600 p-3 text-white">
                        <FiCpu size={24} />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            AI Insights
                        </h2>

                        <p className="text-slate-400">
                            No AI insights generated yet.
                        </p>
                    </div>

                </div>

                <div className="mt-8 space-y-2 text-slate-300">

                    <p>✓ Genre</p>
                    <p>✓ Summary</p>
                    <p>✓ Characters</p>
                    <p>✓ Themes</p>
                    <p>✓ Keywords</p>
                    <p>✓ Reading Level</p>

                </div>

                <button
                    onClick={generate}
                    disabled={generating}
                    className="
                        mt-8
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        bg-indigo-600
                        px-6
                        py-4
                        font-semibold
                        text-white
                        transition
                        hover:bg-indigo-500
                        disabled:opacity-50
                    "
                >
                    {generating ? (
                        <>
                            <FiLoader className="animate-spin" />
                            Generating...
                        </>
                    ) : (
                        <>
                            <FiSlack />
                            Generate AI Insights
                        </>
                    )}
                </button>

            </section>
        );
    }

    // Cached analysis exists.
    return (
        <AIAnalysisCard
            analysis={analysis}
        />
    );
}

/*
Reusable information card.
*/
function InfoCard({
    title,
    value,
    icon,
}: {
    title: string;
    value: string;
    icon: React.ReactNode;
}) {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

            <div className="mb-4 flex items-center gap-3 text-indigo-400">
                {icon}
                <span className="font-semibold">
                    {title}
                </span>
            </div>

            <p className="text-lg text-white">
                {value}
            </p>

        </div>
    );
}