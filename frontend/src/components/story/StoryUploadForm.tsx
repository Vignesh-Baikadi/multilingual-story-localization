import { useState } from "react";

type StoryUploadFormProps = {
  onUpload: (file: File) => Promise<void>;
};

const StoryUploadForm = ({
  onUpload,
}: StoryUploadFormProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!file) return;

    await onUpload(file);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        type="file"
        accept=".pdf,.txt"
        onChange={(e) =>
          setFile(e.target.files?.[0] || null)
        }
      />

      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Upload Story
      </button>
    </form>
  );
};

export default StoryUploadForm;