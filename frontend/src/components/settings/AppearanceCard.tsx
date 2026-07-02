import { FiMoon, FiMonitor, FiSun } from "react-icons/fi";

export default function AppearanceCard() {
    return (
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

            <h2 className="mb-6 text-xl font-semibold text-white">
                Appearance
            </h2>

            <div className="grid grid-cols-3 gap-4">

                <button className="rounded-xl border border-indigo-500 bg-indigo-600 px-4 py-4 text-white transition">
                    <FiMoon className="mx-auto mb-2" size={22} />
                    Dark
                </button>

                <button className="rounded-xl border border-white/10 px-4 py-4 text-slate-300 transition hover:border-indigo-500">
                    <FiSun className="mx-auto mb-2" size={22} />
                    Light
                </button>

                <button className="rounded-xl border border-white/10 px-4 py-4 text-slate-300 transition hover:border-indigo-500">
                    <FiMonitor className="mx-auto mb-2" size={22} />
                    System
                </button>

            </div>

        </section>
    );
}