import type { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface AppLayoutProps {
    children: ReactNode;
}

/*
Application layout shared by all pages.

Sidebar
Topbar
Main Content
*/
export default function AppLayout({
    children,
}: AppLayoutProps) {
    return (
        <div className="flex h-screen overflow-hidden bg-[#030712]">
            <Sidebar />
            <div className="ml-72 flex flex-1 flex-col">
                <Topbar />
                <main className="flex-1 overflow-y-auto p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}