export const fetchStatisticsData = async () => {
    try {
        const res = await fetch(process.env.PUBLIC_URL + "/data/statistics.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const json = await res.json();
        return { data: json, error: null };
    } catch (error) {
        return { data: null, error };
    }
}