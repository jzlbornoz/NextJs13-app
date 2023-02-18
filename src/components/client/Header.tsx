'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/components/Header.module.css';
import { Menu } from '../Menu';


const Header = () => {
    const initialState = {
        menuIsOpen: false,
    };
    const [MenuState, setMenuState] = useState(initialState);
    const toggleMenu = () => {
        setMenuState({
            menuIsOpen: !MenuState.menuIsOpen,
        });
    };
    return (
        <header className={styles.Header}>
            {MenuState.menuIsOpen ? <Menu /> : null}
            {!MenuState.menuIsOpen
                ? <FontAwesomeIcon icon={faBars} onClick={() => toggleMenu()} width={35} />
                : null}
                <FontAwesomeIcon icon={faUserCircle} width={35}/>
        </header>
    )
}

export { Header } 