import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { categoryProductsApi } from '../services/categoryProducts';
import { productDetailsApi } from '../services/productDetails';
import { categoryProductsSlice } from './reducers/categoryProductsSlice';

const rootReducer = combineReducers({
    [categoryProductsApi.reducerPath]: categoryProductsApi.reducer,
    [productDetailsApi.reducerPath]: productDetailsApi.reducer,
    products: categoryProductsSlice.reducer,
});

export const setupStore = (preloadedState) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
            getDefaultMiddleware().concat(
                categoryProductsApi.middleware,
                productDetailsApi.middleware
            ),
        preloadedState,
    });
};
