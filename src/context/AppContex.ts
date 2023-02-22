"use client";
import { PostsModel } from "@/models/post.model";
import { createContext } from "react";

export type AppContextProps = {
  appState: {
    orderIsOpen: boolean;
    menuIsOpen: boolean;
    favorites: PostsModel[];
  };
  toggleMenu: () => void;
  addToFavorites: (payload: PostsModel) => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
