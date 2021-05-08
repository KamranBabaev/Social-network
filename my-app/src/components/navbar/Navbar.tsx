import React from "react";
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.items}>
                <a>Профиль</a>
            </div>
            <div className={styles.items}>
                <a>Сообщения</a>
            </div>
            <div className={styles.items}>
                <a>Музыка</a>
            </div>
            <div className={styles.items}>
                <a>Новости</a>
            </div>
            <div className={styles.items}>
                <a>Настройки</a>
            </div>
        </nav>
    )
}

export default Navbar;