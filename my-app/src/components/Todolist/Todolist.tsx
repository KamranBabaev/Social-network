import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {FilterValuesType, TaskType} from "../../App";


export type TodolistPropsType = {
    tasks: Array<TaskType>
    title: string
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: TodolistPropsType) {

    let [newTaskTitle, setNewTaskTitle] = useState('')

    const tasksElements = props.tasks.map(t => <li key={t.id}>
        <input type='checkbox' checked={t.isDone}/>
        <span>{t.title}</span>
        <button onClick={() => props.removeTask(t.id)}>x</button>
    </li>)

    const newTaskElement = (event: ChangeEvent<HTMLInputElement>) => {
        let text = event.currentTarget.value
        setNewTaskTitle(text)
    }

    const onKeyPressClick = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.addTask(newTaskTitle)
            setNewTaskTitle('')
        }

    }

    const onClickAddTask = () => props.addTask(newTaskTitle)

    const onClickAll = () => props.changeFilter('ALL')
    const onClickActive = () => props.changeFilter('ACTIVE')
    const onClickDone = () => props.changeFilter('DONE')


    return (
        <div>
            <h3>{props.title}</h3>

            <div>
                <input value={newTaskTitle}
                       onChange={newTaskElement}
                       onKeyPress={onKeyPressClick}
                />
                <button onClick={onClickAddTask}>+</button>
            </div>

            <ul>
                {tasksElements}
            </ul>

            <div>
                <button onClick={onClickAll}>all</button>
                <button onClick={onClickActive}>active</button>
                <button onClick={onClickDone}>done</button>
            </div>
        </div>
    )
}