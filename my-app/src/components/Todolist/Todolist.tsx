import React, {ChangeEvent} from "react";
import {TaskType} from "../../App";
import styles from './Todolist.module.css';
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {EditableSpan} from "../EditableSpan/EditableSpan";

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
    changeTaskTitle: (id: string, value: string, todolistID: string) => void
    changeTodolistTitle: (id: string, value: string) => void
}

export function Todolist(props: TodolistPropsType) {

    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }

    const changeTodolistTitle = (value: string) => {
        props.changeTodolistTitle(props.id, value)
    }

    const onClickAll = () => props.changeFilter('ALL', props.id)
    const onClickActive = () => props.changeFilter('ACTIVE', props.id)
    const onClickDone = () => props.changeFilter('DONE', props.id)
    const removeTodolist = () => props.removeTodolist(props.id)

    const tasksElements = props.tasks
        .map(t => {
            const onClickHandler = () => props.removeTask(t.id, props.id)
            const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                props.changeStatus(t.id, e.currentTarget.checked, props.id)
            }
            const onChangeTaskTitleHandler = (value: string) => {
                props.changeTaskTitle(t.id, value, props.id)
            }

            return <li key={t.id} className={t.isDone ? 'is-Done' : ''}>
                <input type='checkbox'
                       onChange={onChangeStatusHandler}
                       checked={t.isDone}
                />
                <EditableSpan title={t.title}
                              onChange={onChangeTaskTitleHandler}/>
                <button onClick={onClickHandler}>x</button>
            </li>
        })

    return (
        <div className={styles.todolists}>
            <h4>
                <EditableSpan title={props.title} onChange={changeTodolistTitle}/>
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

