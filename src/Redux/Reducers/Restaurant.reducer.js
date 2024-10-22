import { createSlice } from "@reduxjs/toolkit";

export const RestaurantReducer = createSlice({
  name: "restaurant",
  initialState: {
    data: [],
    trendingRestaurants: [],
    servingToday: [],
  },
  reducers: {
    saveRestaurants: (state, action) => {
      if (action.payload) {
        state.data = action.payload;
        state.trendingRestaurants = action.payload.filter(
          (data) => data.isTrending
        );
        state.servingToday = action.payload.filter(
          (data) => !data.isTrending
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveRestaurants } = RestaurantReducer.actions;
export default RestaurantReducer.reducer;
