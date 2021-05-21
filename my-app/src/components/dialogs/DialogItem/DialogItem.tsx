import styles from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogItemPropsType = {
    name: string;
    id: string;
}
const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink
                className={styles.navlink}
                to={'/dialogs/' + props.id}>
                <div className={styles.avatarInDialog}>
                    <img src='https://i.pinimg.com/474x/59/ad/e6/59ade6bc0f16ae5461e0ac5ffff550e3.jpg'/>
                </div>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;