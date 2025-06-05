import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./slices/appSlice";
import { homeReducer } from "./slices/homeSLice";

const store = configureStore({
  reducer: {
    app:appReducer,
    home :homeReducer
  },
});

export default store;
