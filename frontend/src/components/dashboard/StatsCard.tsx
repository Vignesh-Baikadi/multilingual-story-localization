import { type IconType } from "react-icons";

interface StatsCardProps {
    title: string;
    value: number;
    growth: string;
    icon: IconType;
}

export default function StatsCard({
    title,
    value,
    growth,
    icon: Icon,
}: StatsCardProps) {
    return (
        <div
            className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-indigo-500/40
                hover:shadow-[0_0_35px_rgba(99,102,241,0.25)]
            "
        >
            <div className="flex items-center justify-between">

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
                    <Icon size={24} />
                </div>

                <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-medium text-green-400">
                    {growth}
                </span>

            </div>

            <h3 className="mt-6 text-slate-400">
                {title}
            </h3>

            <h2 className="mt-2 text-5xl font-bold text-white">
                {value}
            </h2>
        </div>
    );
}