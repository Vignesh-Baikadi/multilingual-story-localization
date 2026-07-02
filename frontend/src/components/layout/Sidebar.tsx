import { NavLink } from "react-router-dom";
import {
    FiBook,
    FiHome,
    FiSettings,
    FiUploadCloud,
} from "react-icons/fi";

const menu = [
    {
        title: "Dashboard",
        icon: FiHome,
        path: "/",
    },
    {
        title: "Upload Story",
        icon: FiUploadCloud,
        path: "/upload",
    },
    {
        title: "Stories",
        icon: FiBook,
        path: "/library",
    },
    {
        title: "Settings",
        icon: FiSettings,
        path: "/settings",
    },
];

export default function Sidebar() {
    return (
        <aside
            className="
                fixed
                left-0
                top-0
                z-40
                flex
                h-screen
                w-72
                flex-col
                border-r
                border-white/10
                bg-[#11151F]/90
                backdrop-blur-2xl
            "
        >
            <div className="border-b border-white/10 p-8">
                <div className="flex items-center gap-4">
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
                            via-violet-500
                            to-purple-600
                            text-xl
                            font-bold
                            text-white
                            shadow-[0_0_25px_rgba(99,102,241,.45)]
                        "
                    >
                        AI
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white">
                            AI Story Studio
                        </h1>
                        <p className="mt-1 text-xs tracking-wide text-slate-400">
                            Multilingual Localization
                        </p>

                    </div>

                </div>

            </div>

            <nav className="flex-1 space-y-2 overflow-y-auto p-5">

                {menu.map((item) => (
                    <NavLink
                        key={item.title}
                        to={item.path}
                        className={({ isActive }) => `
                            group
                            relative
                            flex
                            items-center
                            gap-4
                            rounded-2xl
                            px-5
                            py-4
                            transition-all
                            duration-300

                            ${
                                isActive
                                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/20"
                                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                            }
                        `}
                    >
                        <item.icon
                            size={20}
                            className="
                                transition-transform
                                duration-300
                                group-hover:scale-115
                            "
                        />

                        {item.title}
                    </NavLink>
                ))}

            </nav>
        </aside>
    );
}