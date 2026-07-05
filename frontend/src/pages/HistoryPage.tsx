import AppLayout from "../components/layout/AppLayout";
import HistoryList from "../components/history/HistoryList";

export default function HistoryPage() {
    return (
        <AppLayout>

            <div className="mb-8">

                <h1 className="text-4xl font-bold text-white">
                    Reading History
                </h1>

                <p className="mt-2 text-slate-400">
                    Recently opened stories organized by date.
                </p>

            </div>

            <HistoryList />

        </AppLayout>
    );
}