import React from 'react'
import styles from '../styles/components/Header.module.css';


const Header = () => {
    

    return (
        <header className={styles.Header}>
            <h2>Menu</h2>
            <div className={styles.HeaderUser}>
            </div>
        </header>
    )
}

export { Header } 