import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAppInitialState } from "../../lib/types";

const appInitialState: TAppInitialState = {
  asideOpen: false,
  theme:
    localStorage.getItem("theme") !== null
      ? localStorage.getItem("theme") === "dark"
        ? "dark"
        : "light"
      : "light",
};

const appSLice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    setAsideOpen(state, action: PayloadAction<TAppInitialState["asideOpen"]>) {
      state.asideOpen = action.payload;
    },
    setTheme(state, action: PayloadAction<TAppInitialState["theme"]>) {
      if (action.payload === "dark") {
        localStorage.setItem("theme", action.payload);
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
      state.theme = action.payload;
    },
  },
});

export const { setAsideOpen, setTheme } = appSLice.actions;
export const appReducer = appSLice.reducer;
