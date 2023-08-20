import { useState, useEffect } from 'react';

function useFetchData({ url }) {
    const [assets, setAssets] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        setIsLoading(true);
        fetch(url, { signal })
            .then((data) => {
                return data.json();
            })
            .then((parsedAssets) => {
                setAssets(parsedAssets);
                setIsLoading(false);
            })
            .catch((err) => setIsError(err));
    }, [url]);

    return [assets, isError, isLoading];
}

export default useFetchData;
