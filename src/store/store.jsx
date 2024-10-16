import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Reducers/userSlice";
import roadmapSlice from "./Reducers/roadmapSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    roadmap: roadmapSlice
  },
});
