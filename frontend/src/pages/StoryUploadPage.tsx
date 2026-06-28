import { useState } from "react";

import StoryUploadForm from "../components/story/StoryUploadForm";
import StoryPreview from "../components/story/StoryPreview";
import LoadingSpinner from "../components/common/LoadingSpinner";
import storyService from "../services/storyService";

const StoryUploadPage = () => {
  const [loading, setLoading] =
    useState(false);

  const [preview, setPreview] =
    useState("");

  const [title, setTitle] =
    useState("");

  const [error, setError] =
    useState("");

  const handleUpload = async (
    file: File
  ) => {
    try {
      setLoading(true);
      setError("");

      const data =
        await storyService.uploadStory(file);

      setTitle(data.filename);
      setPreview(data.preview);
    } catch {
      setError(
        "Failed to upload story"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-8 text-4xl font-bold">
        Multilingual Story
        Localization
      </h1>

      <StoryUploadForm
        onUpload={handleUpload}
      />

      {loading && (
        <LoadingSpinner />
      )}

      {error && (
        <div className="mt-4 rounded-lg bg-red-100 p-3 text-red-600">
          {error}
        </div>
      )}

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