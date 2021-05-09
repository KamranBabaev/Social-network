import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                <div className={styles.dialog + ' ' + styles.active}>
                    <NavLink className={styles.navlink} to='/dialogs/1'>Кларк Кент</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink className={styles.navlink} to='/dialogs/2'>Барри Аллен</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink className={styles.navlink} to='/dialogs/3'>Питер Паркер</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink className={styles.navlink} to='/dialogs/4'>Брюс Уэйн</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink className={styles.navlink} to='/dialogs/5'>Тони Старк</NavLink>
                </div>


            </div>
            <div className={styles.messages}>
                <div className={styles.message + ' ' + styles.active}>Да, все окей</div>
                <div className={styles.message}>Что интересного расскажешь?</div>
                <div className={styles.message}>Куда поехал?</div>
            </div>

        </div>
    )
}

export default Dialogs;