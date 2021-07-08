import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import styles from './AddItemForm.module.css'

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {
    let [newTaskTitle, setNewTaskTitle] = useState<string>('')

    const onKeyPressClickAddTask = (event: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (event.key === 'Enter') {
            props.addItem(newTaskTitle)
            setNewTaskTitle('')
        }
    }

    const onClickAddTask = () => {
        if (newTaskTitle.trim() !== '') {
            props.addItem(newTaskTitle.trim())
            setNewTaskTitle('')
        } else {
            setError('ошибочка...')
        }
    }

    const newTaskElement = (event: ChangeEvent<HTMLInputElement>) => {
        let text = event.currentTarget.value
        setNewTaskTitle(text)
    }

    const [error, setError] = useState<string | null>(null)

    return <div className={styles.itemForm}>
        <TextField value={newTaskTitle}
                   onChange={newTaskElement}
                   onKeyPress={onKeyPressClickAddTask}
                   label="new task..."
                   variant="outlined"
                   error={!!error}
                   helperText={error}
                   color="secondary"
        />
        <Button size="large"
                onClick={onClickAddTask}
                color="secondary"><AddIcon color="secondary"/></Button>
    </div>

}