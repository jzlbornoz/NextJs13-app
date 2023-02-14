import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import styles from '../styles/components/Header.module.css';


const Header = () => {


    return (
        <header className={styles.Header}>
            <FontAwesomeIcon icon={faBars} style={{ 'width': '1.5em' }} />
            <div className={styles.HeaderUser}>
                <FontAwesomeIcon icon={faUserCircle} />
            </div>
        </header>
    )
}

export { Header } 