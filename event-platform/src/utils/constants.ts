import { Dispatch, SetStateAction } from "react";

export interface SubscribeChildrenProps {
  isAlreadySubscribed: boolean;
  setIsAlreadySubscribed: Dispatch<SetStateAction<boolean>>;
}
