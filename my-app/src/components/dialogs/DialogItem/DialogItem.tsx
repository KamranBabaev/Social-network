import styles from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogItemPropsType = {
    name: string;
    id: number;
}
const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink
                className={styles.navlink}
                to={'/dialogs/' + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;