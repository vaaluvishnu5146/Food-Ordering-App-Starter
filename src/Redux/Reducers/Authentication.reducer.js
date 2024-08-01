import { createSlice } from "@reduxjs/toolkit";

export const AuthenticationReducer = createSlice({
  name: "authentication",
  initialState: {
    isLoggedIn: false,
    token: null,
    userId: null,
  },
  reducers: {
    saveLoggedInUser: (state, action) => {
      if (action.payload && action.payload) {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.userId = action.payload.userId;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveLoggedInUser } = AuthenticationReducer.actions;
export default AuthenticationReducer.reducer;
