import { useEffect, useState } from "react";

export interface RecentStory {
    id: number;
    title: string;
    created_at: string;
    visitedAt: string;
}

export function useRecentStories() {
    const [stories, setStories] = useState<RecentStory[]>([]);

    useEffect(() => {
        const recent = JSON.parse(
            localStorage.getItem("recentStories") || "[]"
        );

        setStories(recent);
    }, []);

    return stories;
}