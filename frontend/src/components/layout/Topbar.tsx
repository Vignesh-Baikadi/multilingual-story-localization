import {
    FiMoon,
    FiSun,
    FiSettings,
    FiUser,
} from "react-icons/fi";

export default function Topbar() {
    return (
        <header className="sticky top-0 z-30 flex h-20 items-center
                justify-between border-b border-white/10 bg-[#11151F]/80
                px-8 backdrop-blur-2xl"
        >
            <div>

                <h2 className="text-2xl font-bold text-white">
                    Dashboard
                </h2>

                <p className="text-sm text-slate-400">
                    AI-powered multilingual story localization
                </p>

            </div>

           <div className="flex items-center gap-3">
                {/* Theme Toggle */}
                <button
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-3
                        text-slate-300
                        transition
                        hover:border-indigo-500
                        hover:text-white
                    "
                >
                    <FiMoon size={20} />
                </button>

                {/* Profile */}
                <button
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-indigo-500
                        to-violet-600
                        text-white
                    "
                >
                    <FiUser size={18} />
                </button>
            </div>
        </header>
    );
}