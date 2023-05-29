import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.count;
    },
    removeProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product._id === action.payload
      );
      if (index !== -1) {
        const removedProduct = state.products[index];
        state.quantity -= 1;
        state.total -= removedProduct.price;
        state.products.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, clearCart, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
