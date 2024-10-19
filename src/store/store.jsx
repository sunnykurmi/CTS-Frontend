import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/userSlice";
import roadmapReducer from "./Reducers/roadmapSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    roadmap: roadmapReducer
  },
});
