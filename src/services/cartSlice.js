import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            // if there is the product already available in cart increase the quantity else add it to the cart

            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            }
            else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct);
            }
        },
    },
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;