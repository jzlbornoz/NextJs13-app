"use client";
import { createContext } from "react";

export type AppContextProps = {
  menuState: {
    orderIsOpen: boolean;
    menuIsOpen: boolean;
  };
  toggleMenu: () => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
