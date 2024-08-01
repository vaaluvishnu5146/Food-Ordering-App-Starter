import { createSlice } from "@reduxjs/toolkit";

function calculateCartTotal(items = []) {
  let cartTotal = 0

  items.forEach((item) => {
    cartTotal += item.price * item.quantity
  })

  return cartTotal;
}

export const CartReducer = createSlice({
  name: "authentication",
  initialState: {
    items: [],
    cartTotal: 0
  },
  reducers: {
    addItemToCart: (state, action) => {
      if (action.payload) {
        state.items.push({...action.payload, quantity: 1})
        state.cartTotal = calculateCartTotal(state.items)
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart } = CartReducer.actions;
export default CartReducer.reducer;
