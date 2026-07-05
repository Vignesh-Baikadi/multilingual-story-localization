import { useEffect, useState } from "react";
import { getAIAnalysis, generateAIAnalysis,} from "../services/storyService";
import { addHistory } from "../utils/historyStorage";


export interface AIAnalysis {
    title: string;
    genre: string;
    summary: string;
    characters: string[];
    locations: string[];
    themes: string[];
    sentiment: string;
    reading_level: string;
    target_audience: string;
    keywords: string[];
    writing_style: string;
    story_length: string;
    estimated_reading_time: string;
}

export function useAIAnalysis(storyId: number) {
    const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
    const [loading, setLoading] = useState(true);
    const [generating, setGenerating] = useState(false);

    // Load cached analysis when page opens.
    useEffect(() => {
        loadAnalysis();
    }, [storyId]);

    async function loadAnalysis() {
        try {
            const data = await getAIAnalysis(storyId);
            setAnalysis(data);
        } catch {
            setAnalysis(null);
        } finally {
            setLoading(false);
        }
    }

    // Generate AI analysis only when requested.
    async function generate() {
        setGenerating(true);

        try {
            const data = await generateAIAnalysis(storyId);
            addHistory({
                id: storyId,
                title: data.title,
                type: "analysis",
                action: "Generated AI Analysis",
            });
            setAnalysis(data);
        } finally {
            setGenerating(false);
        }
    }

    return {
        analysis,
        loading,
        generating,
        generate,
    };
}