import { useEffect, useState } from "react";
import { getStories } from "../services/storyService";
import StoryCard from "../components/story/StoryCard";

type Story = {
  id: number;
  title: string;
  uploaded_file_name: string;
  created_at: string;
};

const StoryLibraryPage = () => {
  const [stories, setStories] = useState<Story[]>([]);

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

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Story Library
      </h1>

      <div className="space-y-5">
          {stories.map((story) => (
              <StoryCard
                  key={story.id}
                  story={story}
              />
          ))}
      </div>
    </div>
  );
};

export default StoryLibraryPage;