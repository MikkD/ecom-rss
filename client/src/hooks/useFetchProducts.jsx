import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    addProducts,
    setIsLoading,
    setIsError,
} from '../redux/reducers/categoryProductsSlice';

function useFetchProducts({ url, categoryName }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        dispatch(setIsLoading(true));
        fetch(url, { signal })
            .then((data) => {
                return data.json();
            })
            .then((parsedAssets) => {
                dispatch(
                    addProducts({
                        category: categoryName,
                        data: parsedAssets,
                    })
                );
                dispatch(setIsLoading(false));
            })
            .catch((err) => {
                dispatch(setIsError(err));
                dispatch(setIsLoading(false));
            });
    }, [url]);
}

export default useFetchProducts;
