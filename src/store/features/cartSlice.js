import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: JSON.parse(localStorage.getItem("cart")) || [],
    totalQuantity: 0,
    totalAmount: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existProduct = state.products.findIndex((item) => item.id === product.id);
            if (existProduct >= 0) {
                state.products[existProduct].quantity++;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
            state.totalAmount += product.price;
            state.totalQuantity += 1;
            localStorage.setItem('cart', JSON.stringify(state.products));
        },
        removeFromCart: (state, action) => {
            const product = action.payload;
            const existProduct = state.products.find((i) => i.id === product.id);

            if (existProduct) {
                const filterProduct = state.products.filter((pd) => pd.id !== product.id)
                state.products = filterProduct;
                state.totalAmount -= product.price * product.quantity;
                state.totalQuantity -= product.quantity;
                localStorage.setItem('cart', JSON.stringify(state.products));
            }


        },
        decreaseQuantity: (state, action) => {
            const product = action.payload;
            const itemPd = state.products.findIndex((i) => i.id === product.id);

            if (state.products[itemPd].quantity > 1) {
                state.products[itemPd].quantity -= 1;
                state.totalQuantity--;
                state.totalAmount -= state.products[itemPd].price
            }
            localStorage.setItem('cart', JSON.stringify(state.products));
        },
        clearCart: (state, action) => {
            state.products = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;
            localStorage.removeItem('cart', JSON.stringify(state));
        },
        getTotalQuantity: (state, action) => {
            const item = state.products.reduce((total, product) => {
                total += product.quantity

                return total
            }, 0);
            state.totalQuantity += item
        },
        getTotalAmount: (state, action) => {
            const item = state.products.reduce((total, product) => {
                total += (product.price * product.quantity)
                return total
            }, 0);
            state.totalAmount += item
        }
    }
})

export const { addToCart, removeFromCart, decreaseQuantity, clearCart, getTotalAmount, getTotalQuantity } = cartSlice.actions;

export default cartSlice.reducer;