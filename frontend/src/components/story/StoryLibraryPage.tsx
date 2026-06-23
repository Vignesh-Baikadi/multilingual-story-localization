import { useEffect, useState } from "react";
import { getStories } from "../services/storyService";

type Story = {
  id: number;
  title: string;
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

      <div className="grid gap-4">
        {stories.map((story) => (
          <div
            key={story.id}
            className="rounded-lg border p-4 shadow-sm"
          >
            <h2 className="font-semibold">
              {story.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryLibraryPage;