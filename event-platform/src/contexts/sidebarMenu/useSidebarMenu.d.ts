export type GetIsSidebarHidden = () => boolean;

export type SetIsSidebarHidden = (isHidden: boolean) => void;

export type IsSidebarHiddenContextType = {
  getIsSidebarHidden: GetIsSidebarHidden;
  setIsSidebarHidden: SetIsSidebarHidden;
};
