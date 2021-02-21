export const fetchStatisticsData = async () => {
    try {
        const res = await fetch("/data/statistics.json");
        const json = await res.json();
        return { data: json, error: null };
    } catch (error) {
        return { data: null, error };
    }
}