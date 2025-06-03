import classNames from "classnames";
import { useSelector } from "react-redux";
import { TAppInitialState } from "../lib/types";
import ToggleAside from "./ToggleAside";
import IconComponent from "./IconComponent";
import { FaShop } from "react-icons/fa6";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Aside = () => {
  // const dispatch = useDispatch<TAppDispatch>();
  const { asideOpen } = useSelector(
    (state: { app: TAppInitialState }) => state.app
  );
  return (
    <aside
      className={classNames(
        "h-screen fixed md:sticky top-0 left-0 bg-white dark:bg-slate-800 overflow-hidden  transition-all z-[9999] ",
        {
          "w-screen md:w-60": asideOpen,
          "w-0 md:w-[68px]": !asideOpen,
        }
      )}
    >
      <div className="relative h-full w-full flex  flex-col items-center p-3">
        <div className="absolute top-3 right-3 md:hidden">
          {asideOpen && <ToggleAside />}
        </div>
        <Link
          to={"/"}
          className={classNames(
            "flex flex-nowrap items-center justify-center w-full gap-2",
            {
              "md:justify-start": !asideOpen,
              "md:justify-center": asideOpen,
            }
          )}
        >
          <IconComponent Icon={FaShop} className="text-4xl flex-shrink-0" />
          {/* <img src="/images/pan-svgrepo-com.svg" /> */}
          <motion.span
            initial={{ x: asideOpen ? 200 : 0 }}
            animate={{ x: asideOpen ? 0 : 200 }}
            className={classNames("font-bold text-[22px] flex-shrink-0 ", {
              absolute: !asideOpen,
            })}
          >
            M9AYLAT
          </motion.span>
        </Link>
        <Navbar />
      </div>
    </aside>
  );
};

export default Aside;
