export const fetchHomeData = async () => {
    try {
        const res = await fetch(process.env.PUBLIC_URL + "/data/home.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const json = await res.json();
        console.log({ json })
        return { data: json, error: null };
    } catch (error) {
        return { data: null, error };
    }
}