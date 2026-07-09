import { useEffect } from "react";
import { useParams } from "react-router-dom";


import { addHistory } from "../utils/historyStorage";
import AppLayout from "../components/layout/AppLayout";
import StoryHeader from "../components/story/StoryHeader";
import { useStory } from "../hooks/useStory";
import StoryContent from "../components/story/StoryContent";
import AIInsights from "../components/story/AIInsights";
import LocalizationCard from "../components/localization/LocalizationCard";

export default function StoryDetailsPage() {
    const { id } = useParams();

    const {story,loading,error,} = useStory(Number(id));
    // Save recently visited story
    useEffect(() => {
        if (!story) return;
        if (story) {
                addHistory({
                    id: story.id,
                    title: story.title,
                    type: "story",
                    action: "Opened Story",
                });
            }
        const recent = JSON.parse(
            localStorage.getItem("recentStories") || "[]"
        );

        // Remove duplicate if already present
        const filtered = recent.filter(
            (item: any) => item.id !== story.id
        );

        filtered.unshift({
            id: story.id,
            title: story.title,
            created_at: story.created_at,
            visitedAt: new Date().toISOString(),
        });

        // Keep only last 5 stories
        localStorage.setItem(
            "recentStories",
            JSON.stringify(filtered.slice(0, 5))
        );
    }, [story]);


    if (loading) {
        return (
            <AppLayout>
                <p className="text-slate-400">
                    Loading story...
                </p>
            </AppLayout>
        );
    }

    if (error || !story) {
        // Save the story to recent history
        useEffect(() => {
            if (story) {
                addHistory({
                    id: story.id,
                    title: story.title,
                    type: "story",
                    action: "Opened Story",
                });
            }
        }, [story]);


        return (
            <AppLayout>
                <p className="text-red-400">
                    {error || "Story not found."}
                </p>
            </AppLayout>
        );
    }

    return (
        <AppLayout>

            <StoryHeader
                story={story}
            />
            <StoryContent
                content={story.original_text}
            />
            {/* AI-powered story analysis */}
            <AIInsights storyId={story.id} />  

            {/* Localization section */}
            <LocalizationCard 
                storyId={story.id} 
                storyTitle={story.title}
            />  

        </AppLayout>
    );
}