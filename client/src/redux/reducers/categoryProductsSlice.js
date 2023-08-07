import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    men: [],
    women: [],
    accessories: [],
    sale: [],
    new: [],
    trendy: [],
    isLoading: false,
    isError: false,
};

export const categoryProductsSlice = createSlice({
    name: 'categoryProducts',
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state[action.payload.category] = action.payload.data;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setIsError: (state, action) => {
            state.isError = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addProducts, setIsLoading, setIsError } = categoryProductsSlice.actions;

export default categoryProductsSlice.reducer;
