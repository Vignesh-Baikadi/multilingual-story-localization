import { FiCpu } from "react-icons/fi";

export default function AISettingsCard() {
    return (
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

            <h2 className="mb-6 flex items-center gap-3 text-xl font-semibold text-white">
                <FiCpu />
                AI Configuration
            </h2>

            <div className="space-y-4 text-sm">

                <InfoRow label="Provider" value="Google Gemini" />
                <InfoRow label="Model" value="gemini-2.5-flash" />
                <InfoRow label="Caching" value="Enabled" />
                <InfoRow label="Localization" value="Enabled" />
                <InfoRow label="Deep Analysis" value="Coming Soon" />

            </div>

        </section>
    );
}

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-slate-400">{label}</span>
            <span className="font-medium text-white">{value}</span>
        </div>
    );
}