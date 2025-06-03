import ToggleAside from "./ToggleAside";
import ToggleDark from "./ToggleDark";
import AvatarDropDown from "./AvatarDropDown";

const Header = () => {
  return (
    <header className="w-full bg-white dark:bg-slate-800 sticky top-0 transition-all z-[9998] h-16 flex items-center justify-between px-2">
      <ToggleAside />
      <div className="flex items-center gap-2">
        <ToggleDark />
       <AvatarDropDown/>
      </div>
    </header>
  );
};

export default Header;
