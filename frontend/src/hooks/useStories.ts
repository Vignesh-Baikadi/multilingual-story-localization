import { useEffect, useState } from "react";
import { getStories } from "../services/storyService";

export interface Story {
    id: number;
    title: string;
    uploaded_file_name: string;
    created_at: string;
}

export function useStories() {
    const [stories, setStories] = useState<Story[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStories() {
            try {
                const data = await getStories();
                setStories(data);
            } finally {
                setLoading(false);
            }
        }

        loadStories();
    }, []);

    return {
        stories,
        loading,
    };
}