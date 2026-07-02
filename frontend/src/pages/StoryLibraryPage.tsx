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
};

const StoryLibraryPage = () => {
  const [stories, setStories] = useState<Story[]>([]);
const [search, setSearch] = useState("");

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
    return stories.filter((story) =>
        story.title.toLowerCase().includes(search.toLowerCase())
    );
}, [stories, search]);

  return (
    <AppLayout>
      <StoryLibraryToolbar
          search={search}
          setSearch={setSearch}
      />

      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-3xl font-bold">
          Story Library
        </h1>

        <div className="space-y-5">
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