import React, { useState, useEffect } from 'react';

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
                console.log('🚀 ~  data:', data);
                return data.json();
            })
            .then((parsedAssets) => {
                console.log('🚀 ~ parsedAssets:', parsedAssets);

                setAssets(parsedAssets);
                setIsLoading(false);
            })
            .catch((err) => setIsError(err));
    }, [url]);

    return [assets, isError, isLoading];
}

export default useFetchData;
