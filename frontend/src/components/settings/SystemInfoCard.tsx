import { FiServer } from "react-icons/fi";
import { useSystemHealth } from "../../hooks/useSystemHealth";

export default function SystemInfoCard() {
    const health = useSystemHealth();

    if (!health) {
        return (
            <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                Loading...
            </section>
        );
    }

    return (
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
                <FiServer />
                System Status
            </h2>

            <InfoRow label="Backend" value={health.backend} />
            <InfoRow label="Database" value={health.database} />
            <InfoRow label="AI Provider" value={health.ai_provider} />
            <InfoRow label="API Version" value={health.api_version} />
            <InfoRow label="Environment" value={health.environment} />
            <InfoRow label="Status" value={health.status} />
        </section>
    );
}

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="mb-3 flex justify-between border-b border-white/10 pb-3">
            <span className="text-slate-400">{label}</span>
            <span className="font-medium text-white">{value}</span>
        </div>
    );
}
