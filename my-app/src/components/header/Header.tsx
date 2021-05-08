import React from "react";
import styles from './Header.module.css'
import logoMain from './Cyberpunk_logo.png'

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={logoMain} alt="logo"/>
        </div>
    )
}

export default Header;