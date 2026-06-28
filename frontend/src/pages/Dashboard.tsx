import AppLayout from "../components/layout/AppLayout";
import StatsCard from "../components/dashboard/StatsCard";
import {FiBookOpen, FiCpu,FiGlobe,} from "react-icons/fi";
import DashboardHero from "../components/dashboard/DashboardHero";
import RecentStories from "../components/dashboard/RecentStories";
import QuickActions from "../components/dashboard/QuickActions";
import { useDashboard } from "../hooks/useDashBoard";


export default function Dashboard() {
    const { stats, loading } = useDashboard();
    return (
        
       <AppLayout>
        {
            loading && (
                <p className="mb-5 text-slate-400">
                    Loading dashboard...
                </p>
            )
        }
        <DashboardHero />
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
                
            <StatsCard
                title="Stories"
                value={stats.totalStories}
                growth="+4 this week"
                icon={FiBookOpen}
            />
            <StatsCard
                title="AI Analysis"
                value={stats.totalAnalyses}
                growth="+8 today"
                icon={FiCpu}
            />
            <StatsCard
                title="Languages"
                value={stats.totalLanguages}
                growth="+3 added"
                icon={FiGlobe}
            />
            <RecentStories />
            <QuickActions />
        </div>

        </AppLayout>
    );
}