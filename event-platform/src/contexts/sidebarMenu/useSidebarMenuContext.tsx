import { createContext, ReactNode, useState } from "react";
import {
  GetIsSidebarHidden,
  IsSidebarHiddenContextType,
  SetIsSidebarHidden,
} from "./useSidebarMenu";

export const SidebarContext = createContext<IsSidebarHiddenContextType | null>(
  null
);

interface SidebarContextProviderProps {
  children: ReactNode;
}

const SidebarContextProvider = ({ children }: SidebarContextProviderProps) => {
  const [isSBHidden, setIsSBHidden] = useState(true);

  const getIsSidebarHidden: GetIsSidebarHidden = () => isSBHidden;

  const setIsSidebarHidden: SetIsSidebarHidden = (isHidden) =>
    setIsSBHidden(isHidden);

  return (
    <SidebarContext.Provider value={{ getIsSidebarHidden, setIsSidebarHidden }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
