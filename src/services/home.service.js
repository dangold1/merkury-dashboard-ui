export const fetchHomeData = async () => {
    try {
        const res = await fetch("/data/home.json");
        const json = await res.json();
        return { data: json, error: null };
    } catch (error) {
        return { data: null, error };
    }
}