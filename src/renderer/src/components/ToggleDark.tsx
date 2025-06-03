import IconComponent from "./IconComponent";
import { useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppInitialState } from "../lib/types";
import { setTheme } from "../redux/slices/appSlice";

const ToggleDark = () => {
  const dipatch = useDispatch<TAppDispatch>();
  const { theme } = useSelector(
    (state: { app: TAppInitialState }) => state.app
  );
  const handelToggleThem = () => {
    dipatch(setTheme(theme === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <button
      onClick={handelToggleThem}
      className="cursor-pointer rounded-2xl active:bg-gray-200 hover:bg-gray-100 dark:active:bg-slate-900 dark:hover:bg-slate-900 p-2"
    >
      {/* <IconComponent Icon={LuSunMedium} className="text-2xl" /> */}
      <IconComponent Icon={FaRegMoon} className="text-2xl" />
    </button>
  );
};

export default ToggleDark;
