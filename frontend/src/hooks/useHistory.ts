import { useEffect, useState } from "react";
import {
    getHistory,
    type HistoryItem,
} from "../utils/historyStorage";

export function useHistory() {
    const [history, setHistory] =
        useState<HistoryItem[]>([]);

    useEffect(() => {
        setHistory(getHistory());
    }, []);

    return {
        history,
        refresh: () => setHistory(getHistory()),
    };
}