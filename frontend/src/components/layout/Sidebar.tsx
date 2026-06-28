import {FiBook,FiHome,FiSettings, FiUploadCloud,FiGlobe,FiCpu,} from "react-icons/fi";
import { NavLink } from "react-router-dom";

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
        title: "Story Library",
        icon: FiBook,
        path: "/library",
    },
    {
        title: "AI Analysis",
        icon: FiCpu,
        path: "/library",
    },
    {
        title: "Localization",
        icon: FiGlobe,
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
        <aside className="flex h-screen w-72 flex-col border-r border-white/10 bg-white/5 backdrop-blur-xl">

            <div className="border-b border-white/10 p-8">

                <h1 className="text-2xl font-bold text-white">
                    AI Story
                </h1>

                <p className="mt-2 text-sm text-slate-400">
                    Localization Studio
                </p>

            </div>

            <nav className="flex-1 space-y-2 p-5">

                {menu.map((item) => (
                    <NavLink
                        key={item.title}
                        to={item.path}
                        className={({ isActive }) =>
                            `
                            flex
                            items-center
                            gap-4
                            rounded-2xl
                            p-4
                            transition-all
                            duration-300

                            ${
                                isActive
                                    ? "bg-indigo-600 text-white"
                                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                            }
                            `
                        }
                    >
                        <item.icon size={20} />

                        {item.title}
                    </NavLink>
                ))}

            </nav>

        </aside>
    );
}