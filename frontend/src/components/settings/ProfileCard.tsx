import { FiEdit2, FiUser } from "react-icons/fi";

export default function ProfileCard() {
    return (
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="mb-6 text-xl font-semibold text-white">
                Profile
            </h2>

            <div className="flex items-center gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                    <FiUser size={28} />
                </div>

                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">
                        Vignesh
                    </h3>

                    <p className="text-sm text-slate-400">
                        AI Engineer
                    </p>
                </div>

                <button className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-slate-300 transition hover:border-indigo-500 hover:text-white">
                    <FiEdit2 />
                    Edit
                </button>

            </div>
        </section>
    );
}