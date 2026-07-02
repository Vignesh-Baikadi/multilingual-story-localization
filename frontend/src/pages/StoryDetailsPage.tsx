import { useParams } from "react-router-dom";


import AppLayout from "../components/layout/AppLayout";
import StoryHeader from "../components/story/StoryHeader";
import { useStory } from "../hooks/useStory";
import StoryContent from "../components/story/StoryContent";
import AIInsights from "../components/story/AIInsights";
import LocalizationCard from "../components/story/LocalizationCard";

export default function StoryDetailsPage() {
    const { id } = useParams();

    const {
        story,
        loading,
        error,
    } = useStory(Number(id));


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
            <LocalizationCard storyId={story.id} />  

        </AppLayout>
    );
}