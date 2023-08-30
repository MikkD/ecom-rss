import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { categoryProductsApi } from '../services/categoryProducts';
import { productDetailsApi } from '../services/productDetails';
import { slidersApi } from '../services/sliders';
import { categoriesApi } from '../services/categories';
import { shoppingCartSlice } from './reducers/shoppingCartSlice';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    [categoryProductsApi.reducerPath]: categoryProductsApi.reducer,
    [productDetailsApi.reducerPath]: productDetailsApi.reducer,
    [slidersApi.reducerPath]: slidersApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    cart: shoppingCartSlice.reducer,
});

//*Persist
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: [
        categoryProductsApi.reducerPath,
        productDetailsApi.reducerPath,
        slidersApi.reducerPath,
        categoriesApi.reducerPath,
    ],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = (preloadedState) => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(
                categoryProductsApi.middleware,
                productDetailsApi.middleware,
                slidersApi.middleware,
                categoriesApi.middleware
            ),
        preloadedState,
    });
};
