import { TAppDispatch, TAppInitialState } from "../lib/types";
import { useDispatch, useSelector } from "react-redux";
import { setAsideOpen } from "../redux/slices/appSlice";
import { BsList } from "react-icons/bs";
import IconComponent from "./IconComponent";
import { VscClose } from "react-icons/vsc";

const ToggleAside = () => {
  const dispatch = useDispatch<TAppDispatch>();
  const { asideOpen } = useSelector(
    (state: { app: TAppInitialState }) => state.app
  );
  const handelToggleAside = () => {
    dispatch(setAsideOpen(!asideOpen));
  };
  return (
    <button
      onClick={handelToggleAside}
      className="cursor-pointer rounded-2xl active:bg-gray-200 hover:bg-gray-100  dark:active:bg-slate-900 dark:hover:bg-slate-900 p-2"
    >
      {asideOpen ? (
        <IconComponent Icon={VscClose} className="text-2xl" />
      ) : (
        <IconComponent Icon={BsList} className="text-2xl" />
      )}
    </button>
  );
};

export default ToggleAside;
