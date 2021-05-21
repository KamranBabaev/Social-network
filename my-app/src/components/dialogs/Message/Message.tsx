import React from "react";
import styles from './../Dialogs.module.css'

export type MessagePropsType = {
    message: string;
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={styles.message + ' ' + styles.active}>
            <textarea className={styles.textMessage}>{props.message}</textarea>
        </div>
    )
}
export default Message;