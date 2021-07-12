import React, {useCallback} from "react";
import {TaskType} from "../../App";
import styles from './Todolist.module.css';
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Button, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {Task} from "../Task";


export type FilterValuesType = 'ALL' | 'ACTIVE' | 'DONE'

export type TodolistPropsType = {
    tasks: Array<TaskType>
    title: string
    removeTask: (id: string, todolistID: string) => void
    changeFilter: (todolistID: string, value: FilterValuesType) => void
    addTask: (title: string, todolistID: string) => void
    changeStatus: (id: string, isDone: boolean, todolistID: string) => void
    filter: FilterValuesType
    id: string
    todolistID: string
    removeTodolist: (id: string) => void
    changeTaskTitle: (id: string, value: string, todolistID: string) => void
    changeTodolistTitle: (id: string, value: string) => void
}

export const Todolist = React.memo(({
                                        tasks,
                                        title,
                                        removeTask,
                                        changeFilter,
                                        addTask,
                                        changeStatus,
                                        filter,
                                        id,
                                        removeTodolist,
                                        changeTodolistTitle
                                    }: TodolistPropsType) => {

    console.log('тудулист вызван')
    const addTaskCallback = useCallback((title: string) => {
            addTask(title, id)
        },
        [addTask, id])

    const changeTodolistTitleCallback = useCallback((value: string) => {
            changeTodolistTitle(id, value)
        },
        [id, changeTodolistTitle])

    const removeTodolistCallback = () => removeTodolist(id)

    const onClickAll = useCallback(() => changeFilter(id, 'ALL'),
        [changeFilter, id])

    const onClickActive = useCallback(() => changeFilter(id, 'ACTIVE'),
        [changeFilter, id])

    const onClickDone = useCallback(() => changeFilter(id, 'DONE'),
        [changeFilter, id])

    let tasksForTodolist = tasks
    if (filter === 'ACTIVE') {
        tasksForTodolist = tasks.filter(t => !t.isDone)
    }
    if (filter === 'DONE') {
        tasksForTodolist = tasks.filter(t => t.isDone)
    }

    return (
        <div className={styles.todolists}>
            <p>
                <EditableSpan title={title} onChange={changeTodolistTitleCallback}/>
                <IconButton onClick={removeTodolistCallback}><Delete/></IconButton>
            </p>

            <AddItemForm addItem={addTaskCallback}/>

            <div>
                {
                    tasksForTodolist.map((t, index) => <Task todolistID={id}
                                         removeTask={removeTask}
                                         changeStatus={changeStatus}
                                         changeTaskTitle={changeTodolistTitleCallback}
                                         task={t}
                                         key={index}/>)
                }
            </div>

            <div className={styles.filterBTN}>
                <Button onClick={onClickAll}
                        variant={filter === 'ALL' ? "contained" : "outlined"}>all</Button>
                <Button onClick={onClickActive}
                        variant={filter === 'ACTIVE' ? "contained" : "outlined"}>active</Button>
                <Button onClick={onClickDone}
                        variant={filter === 'DONE' ? "contained" : "outlined"}>done</Button>
            </div>
        </div>
    )
})

