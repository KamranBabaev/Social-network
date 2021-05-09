import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css'


const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.items}>
                <NavLink className={styles.item} activeClassName={styles.activeLink} to='/profile'>Профиль</NavLink>
            </div>
            <div className={styles.items}>
                <NavLink className={styles.item} activeClassName={styles.activeLink} to='/dialogs'>Сообщения</NavLink>
            </div>
            <div className={styles.items}>
                <NavLink className={styles.item} activeClassName={styles.activeLink} to='/music'>Музыка</NavLink>
            </div>
            <div className={styles.items}>
                <NavLink className={styles.item} activeClassName={styles.activeLink} to='/news'>Новости</NavLink>
            </div>
            <div className={styles.items}>
                <NavLink className={styles.item} activeClassName={styles.activeLink} to='/settings'>Настройки</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;