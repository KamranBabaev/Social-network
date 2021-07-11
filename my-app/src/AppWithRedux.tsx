import React, {useCallback} from 'react';
import './App.css';
import {FilterValuesType, Todolist} from "./components/Todolist/Todolist";
import {AddItemForm} from "./components/AddItemForm/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";
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

export const AppWithRedux = React.memo(() => {

    const dispatch = useDispatch()

    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists)

    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)


    // todolist actions

    const changeFilter = useCallback((todolistID: string, value: FilterValuesType) => {
        const action = changeTodolistFilterAC(todolistID, value)
        dispatch(action)
    }, [dispatch])

    const removeTodolist = useCallback((id: string) => {
        const action = removeTodolistAC(id)
        dispatch(action)
    }, [dispatch])

    const addTodolist = useCallback((title: string) => {
        const action = addTodolistAC(title)
        dispatch(action)
    }, [dispatch])

    const changeTodolistTitle = useCallback((id: string, value: string) => {
        const action = changeTodolistTitleAC(id, value)
        dispatch(action)
    }, [dispatch])

    // tasks actions

    const addTask = useCallback((title: string, todolistID: string) => {
        const action = addTaskAC(title, todolistID)
        dispatch(action)
    }, [dispatch])

    const removeTask = useCallback((id: string, todolistID: string) => {
        const action = removeTaskAC(id, todolistID)
        dispatch(action)
    }, [dispatch])

    const changeStatus = useCallback((id: string, isDone: boolean, todolistID: string) => {
        const action = changeTaskStatusAC(id, isDone, todolistID)
        dispatch(action)
    }, [dispatch])

    const changeTaskTitle = useCallback((id: string, value: string, todolistID: string) => {
        const action = changeTaskTitleAC(id, value, todolistID)
        dispatch(action)
    }, [dispatch])

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
                        todolists.map((tl, index) => {

                            let tasksForTodolist = tasks[tl.id]

                            return <Grid item key={index}>
                                <Paper elevation={7} style={{padding: '20px', border: '2px solid gray'}}>
                                    <Todolist id={tl.id}
                                              tasks={tasksForTodolist}
                                              todolistID={tl.id}
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
})

