import { useEffect, useState } from "react";

import type { DashboardStats } from "../types/dashboard";
import { getDashboardStats } from "../services/dashboardService";

export function useDashboard() {

    const [stats, setStats] = useState<DashboardStats>({
        totalStories: 0,
        totalLanguages: 0,
        totalAnalyses: 0,
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadDashboard() {

            try {

                const data = await getDashboardStats();

                setStats(data);

            } finally {

                setLoading(false);

            }

        }

        loadDashboard();

    }, []);

    return {

        stats,

        loading,

    };

}