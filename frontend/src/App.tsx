import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import StoryLibrary from "./pages/StoryLibraryPage";
import StoryUploadPage from "./pages/StoryUploadPage";
import StoryDetailsPage from "./pages/StoryDetailsPage";


function Settings() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#030712] text-3xl font-bold text-white">
            Settings
        </div>
    );
}

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
                element={<StoryLibrary />}
            />

            <Route
                path="/settings"
                element={<Settings />}
            />

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>
    );
}