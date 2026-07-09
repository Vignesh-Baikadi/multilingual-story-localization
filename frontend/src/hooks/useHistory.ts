import { useCallback, useEffect, useState } from "react";
import { getHistory, type HistoryItem } from "../utils/historyStorage";

export function useHistory() {
    const [history, setHistory] = useState<HistoryItem[]>([]);

    const refresh = useCallback(() => {
        setHistory(getHistory());
    }, []);

    useEffect(() => {
        refresh();

        window.addEventListener("storage", refresh);

        return () => {
            window.removeEventListener("storage", refresh);
        };
    }, [refresh]);

    return {
        history,
        refresh,
    };
}