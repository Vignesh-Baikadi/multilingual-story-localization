import type { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

/*
Reusable glass container.

Used by:
- Dashboard cards
- Story cards
- Analysis cards
- Localization cards
*/
export default function GlassCard({
    children,
    className = "",
}: GlassCardProps) {
    return (
        <div
            className={`
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                shadow-2xl
                transition-all
                duration-300
                hover:border-indigo-400/40
                hover:shadow-indigo-500/10
                ${className}
            `}
        >
            {children}
        </div>
    );
}