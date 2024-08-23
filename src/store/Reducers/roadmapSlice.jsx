import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  error: null,
  loading: false, // Add loading state
};

const roadmapSlice = createSlice({
  name: 'roadmap',
  initialState,
  reducers: {
    createroadmap(state, action) {
      state.data = action.payload;
      state.error = null;
      state.loading = false; // Set loading to false when data is received
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { createroadmap, setLoading } = roadmapSlice.actions;
export default roadmapSlice.reducer;