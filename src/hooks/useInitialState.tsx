'use client'

import { PostsModel } from '@/models/post.model';
import { useState } from 'react';

interface InitialStateModel {
    orderIsOpen: boolean,
    menuIsOpen: boolean,
    favorites: PostsModel[],
}

const initialState: InitialStateModel = {
    orderIsOpen: false,
    menuIsOpen: false,
    favorites: [],
};

const useInitialState = () => {
    const [appState, setAppState] = useState(initialState);

    const toggleMenu = () => {
        setAppState({
            ...appState,
            orderIsOpen: false,
            menuIsOpen: !appState.menuIsOpen,
        });
    };
    const addToFavorites = (payload: PostsModel) => {
        setAppState({
            ...appState,
            favorites: appState.favorites.includes(payload) ? appState.favorites : [...appState.favorites, payload],
        });
        console.log(appState.favorites);
    };

    return {
        appState,
        toggleMenu,
        addToFavorites
    };
};

export default useInitialState;