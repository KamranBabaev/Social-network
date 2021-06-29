import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {FilterValuesType, TaskType} from "../../App";


export type TodolistPropsType = {
    tasks: Array<TaskType>
    title: string
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeStatus: (id: string, isDone: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: TodolistPropsType) {

    let [newTaskTitle, setNewTaskTitle] = useState<string>('')
    let [error, setError] = useState<string | null>(null)


    const tasksElements = props.tasks
        .map( t => {
            const onClickHandler = () => props.removeTask(t.id)
            const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                props.changeStatus(t.id, e.currentTarget.checked)
            }

            return <li key={t.id} className={t.isDone ? 'is-Done' : ''}>
                <input type='checkbox'
                       onChange={onChangeHandler}
                       checked={t.isDone}
                />
                <span>{t.title}</span>
                <button onClick={onClickHandler}>x</button>
            </li>
        })

    const newTaskElement = (event: ChangeEvent<HTMLInputElement>) => {
        let text = event.currentTarget.value
        setNewTaskTitle(text)
    }

    const onKeyPressClickAddTask = (event: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (event.key === 'Enter') {
            props.addTask(newTaskTitle)
            setNewTaskTitle('')
        }
    }

    const onClickAddTask = () => {
        if (newTaskTitle.trim() !== '') {
            props.addTask(newTaskTitle.trim())
            setNewTaskTitle('')
        } else {
            setError('ошибочка...')
        }
    }

    const onClickAll = () => props.changeFilter('ALL')
    const onClickActive = () => props.changeFilter('ACTIVE')
    const onClickDone = () => props.changeFilter('DONE')


    return (
        <div>
            <h3>{props.title}</h3>

            <div>
                <input value={newTaskTitle}
                       onChange={newTaskElement}
                       onKeyPress={onKeyPressClickAddTask}
                       className={error ? 'error' : ''}
                />
                <button onClick={onClickAddTask}>+</button>
                {error ? <div className='error-message'>{error}</div> : ''}
            </div>

            <ul>
                {tasksElements}
            </ul>

            <div>
                <button className={props.filter === "ALL" ? 'active-filter' : ''} onClick={onClickAll}>all</button>
                <button className={props.filter === "ACTIVE" ? 'active-filter' : ''} onClick={onClickActive}>active</button>
                <button className={props.filter === "DONE" ? 'active-filter' : ''} onClick={onClickDone}>done</button>
            </div>
        </div>
    )
}