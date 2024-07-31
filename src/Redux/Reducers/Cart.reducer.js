import { createSlice } from "@reduxjs/toolkit";

export const CartReducer = createSlice({
  name: "authentication",
  initialState: {
    items: []
  },
  reducers: {
    addItemToCart: (state, action) => {
      if (action.payload) {
        state.items.push({...action.payload, quantity: 1})
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart } = CartReducer.actions;
export default CartReducer.reducer;
