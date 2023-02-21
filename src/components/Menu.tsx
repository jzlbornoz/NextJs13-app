
import Image from 'next/image'
import React, { useContext } from 'react'
import style from '../styles/components/Menu.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faHeart, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '@/context/AppContex';

const Menu = () => {
    const { toggleMenu } = useContext(AppContext);
    return (
        <section className={style.Menu}>
            <div className={style['Menu-Header']}>
                <FontAwesomeIcon icon={faArrowLeft} onClick={() => toggleMenu()}/>
                <Image src='https://api.lorem.space/image/house?w=800&h=800' alt='user' width={250} height={230}
                    className={style['Menu-Header-Background']}
                />
                <Image src='https://i.pravatar.cc/150?u=ddsds'
                    alt='user avatat'
                    width={90}
                    height={90}
                    className={style['Menu-Header-User']}
                />
            </div>
            <ul className={style['Menu-List']}>
                <li>
                    <FontAwesomeIcon icon={faUserCircle} />
                    <p>User</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faHeart} />
                    <p>Liked Posts</p>
                </li>
            </ul>
            <h4>Postify</h4>
        </section>
    )
}

export { Menu }