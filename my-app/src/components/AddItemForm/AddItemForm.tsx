import React, {ChangeEvent, KeyboardEvent, useState} from "react";

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

    let [error, setError] = useState<string | null>(null)

    return <div>
        <input value={newTaskTitle}
               onChange={newTaskElement}
               onKeyPress={onKeyPressClickAddTask}
               className={error ? 'error' : ''}
        />
        <button onClick={onClickAddTask}>+</button>
        {error ? <div className='error-message'>{error}</div> : ''}
    </div>

}