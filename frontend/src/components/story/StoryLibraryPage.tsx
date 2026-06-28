import AppLayout from "../layout/AppLayout";
import StoryCard from "./StoryCard";
import { useStories } from "../../hooks/useStories";

export default function StoryLibrary() {
    const { stories, loading } = useStories();

    return (
        <AppLayout>

            <h1 className="mb-8 text-3xl font-bold text-white">
                Story Library
            </h1>

            {loading ? (
                <p className="text-slate-400">
                    Loading stories...
                </p>
            ) : (
                <div className="space-y-5">
                    {stories.map((story) => (
                        <StoryCard
                            key={story.id}
                            story={story}
                        />
                    ))}
                </div>
            )}

        </AppLayout>
    );
}