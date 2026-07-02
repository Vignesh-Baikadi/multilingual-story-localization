import { useEffect, useState } from "react";
import { getSystemHealth } from "../services/systemService";

export interface SystemHealth {
    status: string;
    api_version: string;
    backend: string;
    database: string;
    ai_provider: string;
    environment: string;
}

export function useSystemHealth() {
    const [health, setHealth] = useState<SystemHealth | null>(null);

    useEffect(() => {
        getSystemHealth().then(setHealth);
    }, []);

    return health;
}