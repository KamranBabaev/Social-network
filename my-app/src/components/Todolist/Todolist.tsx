import React from "react";
import {FilterValuesType, TaskType} from "../../App";


export type TodolistPropsType = {
    tasks: Array<TaskType>
    title: string
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
}

export function Todolist(props: TodolistPropsType) {

    const tasksElements = props.tasks
        .map(t => <li key={t.id}>
            <input type='checkbox' checked={t.isDone}/>
            <span>{t.title}</span>
            <button onClick={() => props.removeTask(t.id)}>x</button>
        </li>)

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksElements}
            </ul>
            <div>
                <button onClick={() => props.changeFilter('ALL')}>all</button>
                <button onClick={() => props.changeFilter('ACTIVE')}>active</button>
                <button onClick={() => props.changeFilter('DONE')}>done</button>
            </div>
        </div>
    )
}