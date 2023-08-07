import { configureStore } from '@reduxjs/toolkit';
import categoryProductsReducer from './reducers/categoryProductsSlice';

export const store = configureStore({
    reducer: {
        categoryProducts: categoryProductsReducer,
    },
});
