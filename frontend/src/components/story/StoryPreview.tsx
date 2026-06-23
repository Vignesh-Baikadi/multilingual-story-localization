type StoryPreviewProps = {
  title: string;
  preview: string;
};

const StoryPreview = ({
  title,
  preview,
}: StoryPreviewProps) => {
  return (
    <div className="mt-6 rounded-lg border border-gray-300 p-5">
      <h2 className="mb-3 text-xl font-semibold">
        {title}
      </h2>

      <p className="whitespace-pre-wrap text-gray-700">
        {preview}
      </p>
    </div>
  );
};

export default StoryPreview;