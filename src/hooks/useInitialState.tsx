'use client'

import { useState } from 'react';

const initialState = {
    orderIsOpen: false,
    menuIsOpen: false,
    favorites: []
};

const useInitialState = () => {
    const [menuState, setMenuState] = useState(initialState);
    const [favorites, setFavorites] = useState(initialState)

    const toggleMenu = () => {
        setMenuState({
            ...menuState,
            orderIsOpen: false,
            menuIsOpen: !menuState.menuIsOpen,
        });
    };


    return {
        menuState,
        toggleMenu,
    };
};

export default useInitialState;