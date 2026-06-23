import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

type Props = {
  onUpload: (file: File) => Promise<void>;
};

const StoryUploadForm = ({
  onUpload,
}: Props) => {
  const [file, setFile] =
    useState<File | null>(null);

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
      className="space-y-5"
    >
      <label
        className="
        flex
        cursor-pointer
        flex-col
        items-center
        justify-center
        rounded-xl
        border-2
        border-dashed
        border-blue-400
        p-12
        text-center
        transition
        hover:bg-blue-50
      "
      >
        <FiUploadCloud
          size={50}
          className="mb-3"
        />

        <p>
          Click to upload PDF/TXT
        </p>

        {file && (
          <p className="mt-2 font-medium">
            {file.name}
          </p>
        )}

        <input
          hidden
          type="file"
          accept=".pdf,.txt"
          onChange={(e) =>
            setFile(
              e.target.files?.[0] || null
            )
          }
        />
      </label>

      <button
        type="submit"
        className="
        w-full
        rounded-lg
        bg-blue-600
        py-3
        font-medium
        text-white
        transition
        hover:bg-blue-700
      "
      >
        Upload Story
      </button>
    </form>
  );
};

export default StoryUploadForm;