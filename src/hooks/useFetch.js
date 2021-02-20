import React, { useState, useEffect } from 'react';

const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setData(json);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false)
            }
        };
        fetchData();
    }, []);

    return { data, error, isLoading };
};

export default useFetch;