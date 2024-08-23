import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
  error: null, // Include error state
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.error = null; // Reset error when saving user
    },
    removeUser: (state, action) => {
      state.user = null;
      state.isAuth = false;
      state.error = null; // Reset error when removing user
    },
    sendmail: (state, action) => {
      state.data = action.payload;
      state.error = null; // Reset error when sending mail
    },
    signuperror: (state, action) => {
      state.error = action.payload; // Set error when signup fails
    },
    signinerror: (state, action) => {
      state.error = action.payload; // Set error when signup fails
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveUser,signinerror, removeUser, sendmail, signuperror } = userSlice.actions;

export default userSlice.reducer;
