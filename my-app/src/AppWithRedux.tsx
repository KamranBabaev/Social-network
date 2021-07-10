import React, {useReducer, useState} from 'react';
import './App.css';
import {FilterValuesType, Todolist} from "./components/Todolist/Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./components/AddItemForm/AddItemForm";
import {AppBar, Backdrop, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todolistsReducer
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./state/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type TasksStateType = {
    [key: string]: Array<TaskType>
}

const AppWithRedux = () => {

    const dispatch = useDispatch()

    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists)

    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)

    // todolist actions

    const changeFilter = (todolistID: string, value: FilterValuesType) => {
        const action = changeTodolistFilterAC(todolistID, value)
        dispatch(action)
    }

    const removeTodolist = (id: string) => {
        const action = removeTodolistAC(id)
        dispatch(action)
    }

    const addTodolist = (title: string) => {
        const action = addTodolistAC(title)
        dispatch(action)
    }

    const changeTodolistTitle = (id: string, value: string) => {
        const action = changeTodolistTitleAC(id, value)
        dispatch(action)
    }

    // tasks actions

    const addTask = (title: string, todolistID: string) => {
        const action = addTaskAC(title, todolistID)
        dispatch(action)
    }

    const removeTask = (id: string, todolistID: string) => {
        const action = removeTaskAC(id, todolistID)
        dispatch(action)
    }

    const changeStatus = (id: string, isDone: boolean, todolistID: string) => {
        const action = changeTaskStatusAC(id, isDone, todolistID)
        dispatch(action)
    }

    const changeTaskTitle = (id: string, value: string, todolistID: string) => {
        const action = changeTaskTitleAC(id, value, todolistID)
        dispatch(action)
    }

    return (
        <div className='appWrapper'>
            <AppBar position="static">
                <Toolbar className='header'>
                    <IconButton edge="start" color="inherit" aria-label="меню">
                        <Menu/>
                    </IconButton>

                    <Typography variant="h5">
                        TODOLIST
                    </Typography>

                    <Button color="inherit">LOGIN</Button>
                </Toolbar>
            </AppBar>

            <Container fixed>
                <Grid container style={{padding: '20px 0'}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>

                <Grid container spacing={3}>
                    {
                        todolists.map(tl => {

                            let allTodolistsTasks = tasks[tl.id];
                            let tasksForTodolist = allTodolistsTasks

                            if (tl.filter === 'ACTIVE') {
                                tasksForTodolist = allTodolistsTasks.filter(t => !t.isDone)
                            }
                            if (tl.filter === 'DONE') {
                                tasksForTodolist = allTodolistsTasks.filter(t => t.isDone)
                            }

                            return <Grid item>
                                <Paper elevation={7} style={{padding: '20px', border: '2px solid gray'}}>
                                    <Todolist key={tl.id}
                                              id={tl.id}
                                              tasks={tasksForTodolist}
                                              title={tl.title}
                                              filter={tl.filter}
                                              removeTask={removeTask}
                                              changeFilter={changeFilter}
                                              addTask={addTask}
                                              changeStatus={changeStatus}
                                              removeTodolist={removeTodolist}
                                              changeTaskTitle={changeTaskTitle}
                                              changeTodolistTitle={changeTodolistTitle}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default AppWithRedux;
