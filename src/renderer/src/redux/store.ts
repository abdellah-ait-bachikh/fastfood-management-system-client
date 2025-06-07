import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./slices/appSlice";
import { homeReducer } from "./slices/homeSLice";
import { dayReducer } from "./slices/daySlice";

const store = configureStore({
  reducer: {
    app:appReducer,
    home :homeReducer,
    day:dayReducer
  },
});

export default store;
