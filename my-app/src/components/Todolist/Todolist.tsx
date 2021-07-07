import React, {ChangeEvent} from "react";
import {TaskType} from "../../App";
import styles from './Todolist.module.css';
import {AddItemForm} from "../AddItemForm/AddItemForm";

export type FilterValuesType = 'ALL' | 'ACTIVE' | 'DONE'

export type TodolistPropsType = {
    tasks: Array<TaskType>
    title: string
    removeTask: (id: string, todolistID: string) => void
    changeFilter: (value: FilterValuesType, todolistID: string) => void
    addTask: (title: string, todolistID: string) => void
    changeStatus: (id: string, isDone: boolean, todolistID: string) => void
    filter: FilterValuesType
    id: string
    removeTodolist: (id: string) => void
}

export function Todolist(props: TodolistPropsType) {

    const tasksElements = props.tasks
        .map(t => {
            const onClickHandler = () => props.removeTask(t.id, props.id)
            const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                props.changeStatus(t.id, e.currentTarget.checked, props.id)
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

    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }

    const onClickAll = () => props.changeFilter('ALL', props.id)
    const onClickActive = () => props.changeFilter('ACTIVE', props.id)
    const onClickDone = () => props.changeFilter('DONE', props.id)
    const removeTodolist = () => props.removeTodolist(props.id)


    return (
        <div className={styles.todolists}>
            <h4>
                {props.title}
                <button onClick={removeTodolist}>x</button>
            </h4>

            <AddItemForm addItem={addTask}/>

            <ul>
                {tasksElements}
            </ul>

            <div className={styles.filterBTN}>
                <button className={props.filter === "ALL" ? 'active-filter' : ''} onClick={onClickAll}>all</button>
                <button className={props.filter === "ACTIVE" ? 'active-filter' : ''} onClick={onClickActive}>active
                </button>
                <button className={props.filter === "DONE" ? 'active-filter' : ''} onClick={onClickDone}>done</button>
            </div>
        </div>
    )
}

