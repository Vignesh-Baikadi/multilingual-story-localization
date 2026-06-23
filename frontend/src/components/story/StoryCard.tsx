type Props = {
  title: string;
};

const StoryCard = ({
  title,
}: Props) => {
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <h3 className="font-semibold">
        {title}
      </h3>
    </div>
  );
};

export default StoryCard;