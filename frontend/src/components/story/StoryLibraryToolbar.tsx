import { FiFilter, FiSearch } from "react-icons/fi";

interface Props {
    search: string;
    setSearch: (value: string) => void;
}

export default function StoryLibraryToolbar({
    search,
    setSearch,
}: Props) {
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

            <div className="flex gap-3">
                <select className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none">
                    <option>All Stories</option>
                </select>

                <select className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none">
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>A-Z</option>
                </select>

                <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:border-indigo-500">
                    <FiFilter />
                    Filters
                </button>
            </div>
        </div>
    );
}