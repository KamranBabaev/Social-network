import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import styles from './AddItemForm.module.css'

export type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = React.memo( (props: AddItemFormPropsType) => {

    console.log('AddItemForm отрисовалась')

    let [newTaskTitle, setNewTaskTitle] = useState<string>('')
    const [error, setError] = useState<string | null>(null)


    const onKeyPressClickAddTask = (event: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null)
        }
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

} )