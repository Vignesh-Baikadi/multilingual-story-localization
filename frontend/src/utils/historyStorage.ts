const STORAGE_KEY = "activity-history";

export const HISTORY_UPDATED_EVENT = "historyUpdated";

export interface HistoryItem {
    [x: string]: string | number | Date;
    id: number;
    title: string;
    type: "story" | "analysis" | "localization" | "upload";
    action: string;
    timestamp: string;
}


// Save a new activity and notify listeners
export function addHistory(
    item: Omit<HistoryItem, "timestamp">
) {
    const history = getHistory();

    const filtered = history.filter(
        (entry) =>
            !(
                entry.id === item.id &&
                entry.type === item.type &&
                entry.action === item.action
            )
    );

    filtered.unshift({
        ...item,
        timestamp: new Date().toISOString(),
    });

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(filtered.slice(0, 200))
    );

    window.dispatchEvent(
        new Event(HISTORY_UPDATED_EVENT)
    );
}
export function getHistory(): HistoryItem[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

export function clearHistory() {
    localStorage.removeItem(STORAGE_KEY);
}

export function removeHistory(timestamp: string) {
    const history = getHistory().filter(
        (item) => item.timestamp !== timestamp
    );

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(history)
    );

    window.dispatchEvent(
        new Event(HISTORY_UPDATED_EVENT)
    );
}