import { useState } from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


interface Props {
    search: string;
    setSearch: (value: string) => void;

    sort: string;
    setSort: (value: string) => void;

    aiStatus: string;
    setAiStatus: (value: string) => void;

    localizationStatus: string;
    setLocalizationStatus: (value: string) => void;
}



export default function StoryLibraryToolbar({
    search,
    setSearch,
    sort,
    setSort,
    aiStatus,
    setAiStatus,
    localizationStatus,
    setLocalizationStatus
}: Props) {
    const navigate = useNavigate();
    const [showFilters, setShowFilters] = useState(false);
    
    return (
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search stories..."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white outline-none transition focus:border-indigo-500"
                />
            </div>
            
            <div className="flex flex-wrap gap-3">
                <select className="rounded-2xl border border-white/10 bg-[#11151F] px-4 py-3 text-sm text-white outline-none transition hover:border-indigo-500 focus:border-indigo-500">
                    <option>All Stories</option>
                </select>

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="rounded-2xl border border-white/10 bg-[#11151F] px-4 py-3 text-sm text-white outline-none transition hover:border-indigo-500 focus:border-indigo-500"
                >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                </select>

                <button
                    onClick={() => navigate("/upload")}
                    className="flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-white transition hover:bg-indigo-500"
                >
                    <FiPlus />
                    Upload
                </button>
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:border-indigo-500"
                >
                    <FiFilter />
                    Filters
                </button>
                {showFilters && (
                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                        <div className="grid gap-4 md:grid-cols-2">

                            <label className="space-y-2">
                                <span className="text-sm text-slate-400">
                                    AI Status
                                </span>

                               <select
                                    value={aiStatus}
                                    onChange={(e) => setAiStatus(e.target.value)}
                                    className="w-full rounded-xl border border-white/10 bg-[#11151F] p-3 text-white"
                                >
                                    <option value="all">All</option>
                                    <option value="ready">AI Ready</option>
                                    <option value="pending">Not Generated</option>
                                </select>
                            </label>

                            <label className="space-y-2">
                                <span className="text-sm text-slate-400">
                                    Localization
                                </span>

                                <select
                                    value={localizationStatus}
                                    onChange={(e) => setLocalizationStatus(e.target.value)}
                                    className="w-full rounded-xl border border-white/10 bg-[#11151F] p-3 text-white"
                                >
                                    <option value="all">All</option>
                                    <option value="localized">Localized</option>
                                    <option value="not-localized">Not Localized</option>
                                </select>
                            </label>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}