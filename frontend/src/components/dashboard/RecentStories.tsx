import {
    FiArrowRight,
    FiBookOpen,
} from "react-icons/fi";

const stories = [
    {
        id: 1,
        title: "The Lost Kingdom",
        genre: "Fantasy",
        language: "English",
        uploaded: "2 mins ago",
    },
    {
        id: 2,
        title: "Dragon's Curse",
        genre: "Adventure",
        language: "Hindi",
        uploaded: "Yesterday",
    },
    {
        id: 3,
        title: "Moon Warrior",
        genre: "Sci-Fi",
        language: "Telugu",
        uploaded: "3 days ago",
    },
];

export default function RecentStories() {
    return (
        <section className="mt-10">

            <div className="mb-6 flex items-center justify-between">

                <h2 className="text-2xl font-bold text-white">
                    Recent Stories
                </h2>

                <button className="text-indigo-400 hover:text-indigo-300">
                    View All
                </button>

            </div>

            <div className="space-y-4">

                {stories.map((story) => (

                    <div
                        key={story.id}
                        className="
                            flex
                            items-center
                            justify-between
                            rounded-3xl
                            border
                            border-white/10
                            bg-white/5
                            p-6
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            hover:border-indigo-500/40
                            hover:shadow-[0_0_25px_rgba(99,102,241,.25)]
                        "
                    >

                        <div className="flex items-center gap-5">

                            <div
                                className="
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-gradient-to-br
                                    from-indigo-500
                                    to-purple-600
                                    text-white
                                "
                            >
                                <FiBookOpen size={24} />
                            </div>

                            <div>

                                <h3 className="text-lg font-semibold text-white">
                                    {story.title}
                                </h3>

                                <p className="mt-1 text-sm text-slate-400">
                                    {story.genre}
                                    {" • "}
                                    {story.language}
                                    {" • "}
                                    {story.uploaded}
                                </p>

                            </div>

                        </div>

                        <button
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-indigo-600
                                px-5
                                py-3
                                text-white
                                transition
                                hover:bg-indigo-500
                            "
                        >
                            View

                            <FiArrowRight />
                        </button>

                    </div>

                ))}

            </div>

        </section>
    );
}