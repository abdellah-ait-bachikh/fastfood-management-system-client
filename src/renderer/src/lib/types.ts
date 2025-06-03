import store from "../redux/store";

export type TAppDispatch = typeof store.dispatch;
export interface TAppInitialState {
  asideOpen: boolean;
  theme: "light" | "dark";
}
