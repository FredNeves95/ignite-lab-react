import { createContext, ReactNode, useState } from "react";
import {
  GetSubscriberName,
  SetSubscriberName,
  SubscriberNameContextType,
} from "./useSubscriberName";

export const SubscriberContext =
  createContext<SubscriberNameContextType | null>(null);

interface SubscriberContextProviderProps {
  children: ReactNode;
}
const SubscriberContextProvider = ({
  children,
}: SubscriberContextProviderProps) => {
  const [subName, setSubName] = useState("");

  const getSubscriberName: GetSubscriberName = () => subName;

  const setSubscriberName: SetSubscriberName = (name) => setSubName(name);

  return (
    <SubscriberContext.Provider
      value={{ getSubscriberName, setSubscriberName }}
    >
      {children}
    </SubscriberContext.Provider>
  );
};

export default SubscriberContextProvider;
