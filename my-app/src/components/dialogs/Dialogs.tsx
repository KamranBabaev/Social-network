import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Dialogs.module.css'

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

export type MessagePropsType = {
    message: string;
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={styles.message + ' ' + styles.active}>
            {props.message}
        </div>
    )
}

export type DialogsPropsType = {
    DialogsData: Array<DialogsDataPopsType>
    MessageData: Array<MessageDataPropsType>
}

export type DialogsDataPopsType = {
    id: number;
    name: string;
}

export type MessageDataPropsType = {
    id: number;
    message: string;
}

const Dialogs = (props: DialogsPropsType) => {
    let DialogsData = [
        {id: 1, name: 'Кларк Кент'},
        {id: 2, name: 'Барри Аллен'},
        {id: 3, name: 'Брюс Уэйн'},
        {id: 4, name: 'Питер Паркер'},
        {id: 5, name: 'Тони Старк'},
    ]

    let MessageData = [
        {id: 1, message: 'Что интересного расскажешь?'},
        {id: 2, message: 'Куда поехал?'},
        {id: 3, message: 'Куда поехал?'},
        {id: 4, message: 'Куда поехал?'},
    ]


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                <DialogItem
                    name={DialogsData[0].name}
                    id={DialogsData[0].id}/>
                <DialogItem
                    name={DialogsData[1].name}
                    id={DialogsData[1].id}/>
            </div>
            <div className={styles.messages}>
                <Message message={MessageData[0].message}/>
                <Message message={MessageData[1].message}/>
            </div>

        </div>
    )
}

export default Dialogs;