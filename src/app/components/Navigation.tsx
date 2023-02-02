import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navigation.module.css';

const links = [{
    label: 'home',
    root: '/',
},
{
    label: 'about',
    root: '/about'
},
{
    label: 'posts',
    root: '/posts'
}]

const Navigation = () => {
    return (
        <header className={styles.Header}>
            <nav>
                <ul className={styles.Navigation}>
                    {links.map(({ label, root }) => (
                        <li key={label}>
                            <Link href={root}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export { Navigation } 