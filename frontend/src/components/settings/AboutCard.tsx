import { FiGithub, FiInfo } from "react-icons/fi";

export default function AboutCard() {
    return (
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
                <FiInfo />
                About
            </h2>

            <div className="space-y-3 text-sm">
                <InfoRow label="Application" value="AI Story Localization" />
                <InfoRow label="Version" value="1.0.0" />
                <InfoRow label="Author" value="Vignesh" />
                <InfoRow label="Frontend" value="React + TypeScript" />
                <InfoRow label="Backend" value="FastAPI" />
                <InfoRow label="Database" value="PostgreSQL" />
                <InfoRow label="License" value="MIT" />

                <button className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-white transition hover:border-indigo-500">
                    <FiGithub />
                    GitHub Repository
                </button>
            </div>
        </section>
    );
}

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex justify-between">
            <span className="text-slate-400">{label}</span>
            <span className="text-white">{value}</span>
        </div>
    );
}