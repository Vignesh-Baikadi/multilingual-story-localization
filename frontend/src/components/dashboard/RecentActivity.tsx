import { FiActivity } from "react-icons/fi";

const activities = [
    "Story uploaded successfully",
    "AI analysis generated",
    "Story translated to Telugu",
];

export default function RecentActivity() {
    return (
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

            <div className="mb-6 flex items-center gap-3">

                <FiActivity className="text-indigo-400" />

                <h2 className="text-xl font-semibold text-white">
                    Recent Activity
                </h2>

            </div>

            <div className="space-y-4">

                {activities.map((item) => (
                    <div
                        key={item}
                        className="rounded-xl border border-white/10 p-4 text-slate-300"
                    >
                        {item}
                    </div>
                ))}

            </div>

        </section>
    );
}