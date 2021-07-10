import React, {useReducer} from 'react';
import './App.css';
import {FilterValuesType, Todolist} from "./components/Todolist/Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./components/AddItemForm/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todolistsReducer
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./state/tasks-reducer";

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

const AppWithReducers = () => {

    let todolistID1 = v1();
    let todolistID2 = v1();

    const [todolists, dispathToTodolists] = useReducer(todolistsReducer, [
        {id: todolistID1, title: 'План обучения на сегодня', filter: 'ALL'},
        {id: todolistID2, title: 'Список покупок', filter: 'ALL'},
    ])

    const [tasks, dispathToTasks] = useReducer(tasksReducer, {
        [todolistID1]: [
            {id: v1(), title: 'HTML', isDone: false},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'Redux', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'конфеты', isDone: false},
            {id: v1(), title: 'молоко', isDone: false},
            {id: v1(), title: 'хлеб', isDone: false},
        ]
    })

    const removeTask = (id: string, todolistID: string) => {
        const action = removeTaskAC(id, todolistID)
        dispathToTasks(action)
    }

    const addTask = (title: string, todolistID: string) => {
        const action = addTaskAC(title, todolistID)
        dispathToTasks(action)
    }

    const changeFilter = (todolistID: string, value: FilterValuesType) => {
        const action = changeTodolistFilterAC(todolistID, value)
        dispathToTodolists(action)
    }

    const changeStatus = (id: string, isDone: boolean, todolistID: string) => {
        const action = changeTaskStatusAC(id, isDone, todolistID)
        dispathToTasks(action)
    }

    const removeTodolist = (id: string) => {
        const action = removeTodolistAC(id)
        dispathToTodolists(action)
    }

    const addTodolist = (title: string) => {
        const action = addTodolistAC(title)
        dispathToTodolists(action)
        dispathToTasks(action)
    }

    const changeTaskTitle = (id: string, value: string, todolistID: string) => {
        const action = changeTaskTitleAC(id, value, todolistID)
        dispathToTasks(action)
    }

    const changeTodolistTitle = (id: string, value: string) => {
        const action = changeTodolistTitleAC(id, value)
        dispathToTodolists(action)
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

                            let tasksForTodolist = tasks[tl.id];
                            if (tl.filter === 'ACTIVE') {
                                tasksForTodolist = tasksForTodolist.filter(t => !t.isDone)
                            }
                            if (tl.filter === 'DONE') {
                                tasksForTodolist = tasksForTodolist.filter(t => t.isDone)
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

export default AppWithReducers;