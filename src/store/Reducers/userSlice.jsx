import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
  error: null,
  loading: false, // Add loading state
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.error = null;
      state.loading = false; // Reset loading when saving user
    },
    removeUser: (state, action) => {
      state.user = null;
      state.isAuth = false;
      state.error = null;
      state.loading = false; // Reset loading when removing user
    },
    signuperror: (state, action) => {
      state.error = action.payload;
      state.loading = false; // Reset loading on error
    },
    signinerror: (state, action) => {
      state.error = action.payload;
      state.loading = false; // Reset loading on error
    },
    setLoading: (state, action) => {
      state.loading = action.payload; // Set loading state
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, signinerror, removeUser, signuperror, setLoading } = userSlice.actions;

export default userSlice.reducer;