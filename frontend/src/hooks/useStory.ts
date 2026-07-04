import { useEffect, useState } from "react";
import { getStory } from "../services/storyService";

export interface Story {
    id: number;
    title: string;
    original_text: string;
    uploaded_file_name: string;
    created_at: string;
    updated_at: string;

    has_analysis: boolean;
    has_localization: boolean;
    localization_count: number;
}

export function useStory(id: number) {
    const [story, setStory] = useState<Story | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const data = await getStory(id);
                setStory(data);
            } catch {
                setError("Failed to load story.");
            } finally {
                setLoading(false);
            }
        };

        fetchStory();
    }, [id]);

    return {
        story,
        loading,
        error,
    };
}