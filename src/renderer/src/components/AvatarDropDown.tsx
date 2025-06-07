import { Avatar } from "@heroui/react";
import  { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import IconComponent from "./IconComponent";
import { avatarDropdownElements } from "../lib/const";
import { Link } from "react-router-dom";

const AvatarDropDown = () => {
  const [avatarDropDownOpen, setAvatarDropDownOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const avatarButtonRef = useRef<HTMLButtonElement>(null);
  const handelToggleAvatarDropDown = useCallback(
    (value?: boolean) => {
      setAvatarDropDownOpen(
        typeof value === "boolean" ? value : !avatarDropDownOpen
      );
    },
    [avatarDropDownOpen]
  );
  useEffect(() => {
    const handelCLickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(target) &&
        avatarButtonRef.current &&
        !avatarButtonRef.current.contains(target)
      ) {
        handelToggleAvatarDropDown(false);
      }
    };
    document.addEventListener("click", handelCLickOutside);
    return () => {
      document.removeEventListener("click", handelCLickOutside);
    };
  }, [handelToggleAvatarDropDown]);

  return (
    <div className="relative flex items-center">
      <button
        aria-expanded={avatarDropDownOpen}
        type="button"
        ref={avatarButtonRef}
        onClick={() => handelToggleAvatarDropDown()}
      >
        <Avatar />
      </button>
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: avatarDropDownOpen ? 1 : 0,
          opacity: avatarDropDownOpen ? 1 : 0,
        }}
        className="absolute top-[60px] right-full p-2 rounded-xl bg-white dark:bg-gray-950 flex flex-col gap-1  w-[200px] "
        ref={dropDownRef}
      >
        {avatarDropdownElements.map((item) =>
          item.href ? (
            <Link
              key={"avatar element " + item.id}
              to={item.href}
              className="flex items-center gap-2 rounded-md p-2 active:bg-gray-100 hover:bg-gray-100 dark:hover:bg-slate-900 cursor-pointer"
              onClick={() => handelToggleAvatarDropDown(false)}
            >
              <IconComponent Icon={item.icon} className="text-2xl " />
              <div className="font-semibold text-lg text-nowrap flex-1 text-left text-ellipsis overflow-hidden">
                {item.label ? item.label : "abdellah ait bachikh"}
              </div>
            </Link>
          ) : (
            <button
              key={"avatar element " + item.id}
              className="flex items-center gap-2 rounded-md p-2 active:bg-danger-50 hover:bg-danger-50 cursor-pointer"
              onClick={() => handelToggleAvatarDropDown(false)}
            >
              <IconComponent Icon={item.icon} className="text-2xl " />
              <div className="font-semibold text-lg text-nowrap flex-1 text-left text-ellipsis overflow-hidden">
                {item.label}
              </div>
            </button>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AvatarDropDown;
