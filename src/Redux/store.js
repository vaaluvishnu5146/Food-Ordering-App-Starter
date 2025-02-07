import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import AuthenticationReducer from "./Reducers/Authentication.reducer";
import RestaurantReducer from "./Reducers/Restaurant.reducer";
import CartReducer from "./Reducers/Cart.reducer";

export default configureStore({
  // ROOT REDUCER
  reducer: {
    authentication: AuthenticationReducer,
    restaurant: RestaurantReducer,
    cart: CartReducer
  },
});
