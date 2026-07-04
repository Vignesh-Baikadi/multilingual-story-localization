import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import StoryLibraryPage from "./pages/StoryLibraryPage";
import StoryUploadPage from "./pages/StoryUploadPage";
import StoryDetailsPage from "./pages/StoryDetailsPage";
import SettingsPage from "./pages/SettingsPage";

function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#030712] text-3xl font-bold text-white">
            404 Page Not Found
        </div>
    );
}

export default function App() {
    return (
        <Routes>

            <Route
                path="/"
                element={<Dashboard />}
            />

            <Route
                path="/upload"
                element={<StoryUploadPage />}
            />
            <Route
                path="/story/:id"
                element={<StoryDetailsPage />}
            />
            <Route
                path="/library"
                element={<StoryLibraryPage />}
            />

            <Route
                path="/settings"
                element={<SettingsPage />}
            />

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>
    );
}