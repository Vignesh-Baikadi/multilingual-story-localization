import {
    FiUploadCloud,
    FiCpu,
    FiGlobe,
    FiBookOpen,
    FiArrowRight,
} from "react-icons/fi";

const actions = [
    {
        title: "Upload Story",
        description: "Upload a PDF or TXT story",
        icon: FiUploadCloud,
    },
    {
        title: "AI Analysis",
        description: "Analyze characters & themes",
        icon: FiCpu,
    },
    {
        title: "Localization",
        description: "Translate into 100+ languages",
        icon: FiGlobe,
    },
    {
        title: "Story Library",
        description: "Browse all uploaded stories",
        icon: FiBookOpen,
    },
];

export default function QuickActions() {
    return (
        <section className="mt-10">

            <h2 className="mb-6 text-2xl font-bold text-white">
                Quick Actions
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

                {actions.map((action) => (
                    <button
                        key={action.title}
                        className="
                            group
                            flex
                            items-center
                            justify-between
                            rounded-3xl
                            border
                            border-white/10
                            bg-white/5
                            p-6
                            text-left
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-indigo-500/40
                            hover:shadow-[0_0_35px_rgba(99,102,241,.25)]
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
                                <action.icon size={24} />
                            </div>

                            <div>

                                <h3 className="text-lg font-semibold text-white">
                                    {action.title}
                                </h3>

                                <p className="mt-1 text-sm text-slate-400">
                                    {action.description}
                                </p>

                            </div>

                        </div>

                        <FiArrowRight
                            className="
                                text-slate-400
                                transition-transform
                                group-hover:translate-x-1
                            "
                            size={22}
                        />

                    </button>
                ))}

            </div>

        </section>
    );
}