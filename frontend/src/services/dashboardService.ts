import axios from "axios";
import type { DashboardStats } from "../types/dashboard";

const API = "http://127.0.0.1:8000/api/v1";

/*
Dashboard statistics.

Currently calculated from stories.
Later this endpoint will be replaced by
GET /dashboard/stats.
*/
export async function getDashboardStats(): Promise<DashboardStats> {

    const { data } = await axios.get(`${API}/stories`);

    return {

        totalStories: data.length,

        /*
        Placeholder until localization
        table is added.
        */
        totalLanguages: data.length,

        /*
        Placeholder until AI analysis
        table is added.
        */
        totalAnalyses: data.length

    };
}