import { useState } from "react";

import StoryUploadForm from "../components/story/StoryUploadForm";
import StoryPreview from "../components/story/StoryPreview";

import { uploadStory } from "../services/storyService";

const StoryUploadPage = () => {
  const [preview, setPreview] =
    useState("");

  const [title, setTitle] =
    useState("");

  const handleUpload = async (
    file: File
  ) => {
    try {
      const data = await uploadStory(file);

      setTitle(data.filename);
      setPreview(data.preview);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-4xl px-6">
      <h1 className="mb-8 text-3xl font-bold">
        Multilingual Story Localization
      </h1>

      <StoryUploadForm
        onUpload={handleUpload}
      />

      {preview && (
        <StoryPreview
          title={title}
          preview={preview}
        />
      )}
    </div>
  );
};

export default StoryUploadPage;