import { useEffect, useState, useMemo } from "react";
import { getStories } from "../services/storyService";
import StoryCard from "../components/story/StoryCard";
import AppLayout from "../components/layout/AppLayout";
import StoryLibraryToolbar from "../components/story/StoryLibraryToolbar";

type Story = {
    id: number;
    title: string;
    uploaded_file_name: string;
    original_text: string;
    created_at: string;
    updated_at: string;
    has_analysis: boolean;
    has_localization: boolean;
    localization_count: number;
};

const StoryLibraryPage = () => {
const [stories, setStories] = useState<Story[]>([]);
const [search, setSearch] = useState("");
const [sort, setSort] = useState("newest");
const [aiStatus, setAiStatus] = useState("all");
const [localizationStatus, setLocalizationStatus] = useState("all");

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const data = await getStories();
        setStories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStories();
  }, []);

    const filteredStories = useMemo(() => {
    let result = stories.filter((story) =>
        story.title.toLowerCase().includes(search.toLowerCase())
    );

    switch (sort) {
        case "oldest":
            result.sort(
                (a, b) =>
                    new Date(a.created_at).getTime() -
                    new Date(b.created_at).getTime()
            );
            break;

        case "az":
            result.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
            break;

        case "za":
            result.sort((a, b) =>
                b.title.localeCompare(a.title)
            );
            break;

        default:
            result.sort(
                (a, b) =>
                    new Date(b.created_at).getTime() -
                    new Date(a.created_at).getTime()
            );
    }

    // AI analysis filter
    if (aiStatus !== "all") {
        result = result.filter((story) =>
            aiStatus === "ready"
                ? story.has_analysis
                : !story.has_analysis
        );
    }

    // Localization filter
    if (localizationStatus !== "all") {
        result = result.filter((story) =>
            localizationStatus === "localized"
                ? story.has_localization
                : !story.has_localization
        );
    }

    return result;
}, [stories, search, sort]);

return (
    <AppLayout>
        <div className="mx-auto max-w-6xl">

            <h1 className="mb-8 text-3xl font-bold text-white">
                Stories
            </h1>

            <StoryLibraryToolbar
                search={search}
                setSearch={setSearch}
                sort={sort}
                setSort={setSort}
                aiStatus={aiStatus}
                setAiStatus={setAiStatus}
                localizationStatus={localizationStatus}
                setLocalizationStatus={setLocalizationStatus}
            />

            <div className="space-y-4">
                {filteredStories.map((story) => (
                    <StoryCard
                        key={story.id}
                        story={story}
                    />
                ))}
            </div>

        </div>
    </AppLayout>
);
};

export default StoryLibraryPage;