import { createSlice, current } from '@reduxjs/toolkit';
//*current is used to log current reduxt state object

const initialState = {
    cartItems: [],
};

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemInCart = state.cartItems.find(
                (cartItem) => cartItem.id === action.payload.id
            );

            if (itemInCart) {
                itemInCart.qty += action.payload.qty;
                itemInCart.total += action.payload.qty * action.payload.price;
                return;
            }
            state.cartItems.push(action.payload);
        },
        substractFromCart(state, action) {},
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter((cartItem) => {
                console.log('cartItem inside', cartItem);
                return cartItem.id !== action.payload;
            });
        },
        clearCart(state, action) {
            console.log('crear cart');
            state.cartItems = [];
        },
    },
});

export const { addToCart, substractFromCart, removeFromCart, clearCart } =
    shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
