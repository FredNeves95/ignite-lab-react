import { useContext } from "react";
import { IsSidebarHiddenContextType } from "../contexts/sidebarMenu/useSidebarMenu";
import { SidebarContext } from "../contexts/sidebarMenu/useSidebarMenuContext";
import Icon from "./Icon";
import MenuCloseIcon from "./MenuCloseIcon";
import MenuOpenIcon from "./MenuOpenIcon";

const Header = () => {
  const { getIsSidebarHidden } = useContext(
    SidebarContext
  ) as IsSidebarHiddenContextType;

  const isHidden = getIsSidebarHidden();

  return (
    <header className="w-full py-5 px-6 flex items-center justify-between bg-gray-700 border-b border-gray-600 lg:justify-center lg:px-0">
      <Icon />
      <span className="text-gray-300 flex gap-2 items-center lg:hidden">
        Aulas {isHidden ? <MenuOpenIcon /> : <MenuCloseIcon />}
      </span>
    </header>
  );
};

export default Header;
