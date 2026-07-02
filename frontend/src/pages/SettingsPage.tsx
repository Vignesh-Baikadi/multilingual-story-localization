import AppLayout from "../components/layout/AppLayout";
import ProfileCard from "../components/settings/ProfileCard";
import AppearanceCard from "../components/settings/AppearanceCard";
import AISettingsCard from "../components/settings/AISettingsCard";
// import SystemInfoCard from "../components/settings/SystemInfoCard";
// import AboutCard from "../components/settings/AboutCard";

export default function SettingsPage() {
    return (
        <AppLayout>
            <div className="mx-auto max-w-7xl">

                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-white">
                        Settings
                    </h1>

                    <p className="mt-2 text-slate-400">
                        Manage your application preferences.
                    </p>
                </div>

                <div className="grid gap-6 xl:grid-cols-2">
                    <ProfileCard />
                    <AppearanceCard />
                    <AISettingsCard />
                    {/* <SystemInfoCard />
                    <AboutCard /> */}
                </div>

            </div>
        </AppLayout>
    );
}