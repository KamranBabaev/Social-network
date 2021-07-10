import {TasksStateType} from "../App";
import {v1} from "uuid";

type ActionsType = RemoveTaskAT | AddTaskAT | ChangeTaskStatusAT | ChangeTaskTitleAT | AddTodolistAT | RemoveTodolistAT

export type RemoveTaskAT = {
    type: "REMOVE-TASKS"
    id: string
    todolistID: string
}

export type AddTaskAT = {
    type: "ADD-TASK"
    title: string
    todolistID: string
}

export type ChangeTaskStatusAT = {
    type: "CHANGE-TASK-STATUS"
    id: string
    isDone: boolean
    todolistID: string
}

export type ChangeTaskTitleAT = {
    type: "CHANGE-TASK-TITLE"
    id: string
    title: string
    todolistID: string
}

export type AddTodolistAT = {
    type: "ADD-TODOLIST"
    title: string
    todolistID: string
}

export type RemoveTodolistAT = {
    type: "REMOVE-TODOLIST-WITH-TASKS"
    todolistID: string
}


let todolistID1 = v1();
let todolistID2 = v1();

const initialState: TasksStateType = {
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
}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {

        case "REMOVE-TASKS": {
            const copyState = {...state}
            const tasks = state[action.todolistID]
            const filteredTasks = tasks.filter((t => t.id !== action.id))
            copyState[action.todolistID] = filteredTasks
            return copyState
        }

        case "ADD-TASK": {
            const copyState = {...state}
            const tasks = copyState[action.todolistID]
            const newTask = {id: action.todolistID, title: action.title, isDone: false}
            const newTasks = [newTask, ...tasks]
            copyState[action.todolistID] = newTasks
            return copyState
        }

        case "CHANGE-TASK-STATUS": {
            const copyState = {...state}
            const tasks = copyState[action.todolistID]
            const task = tasks.find(t => t.id === action.id)
            if (task) {
                task.isDone = action.isDone
            }
            return copyState
        }

        case "CHANGE-TASK-TITLE": {
            const copyState = {...state}
            const tasks = copyState[action.todolistID]
            const task = tasks.find(t => t.id === action.id)
            if (task) {
                task.title = action.title
            }
            return copyState
        }

        case "ADD-TODOLIST": {
            return {...state, [action.todolistID]: []}
        }

        case "REMOVE-TODOLIST-WITH-TASKS": {
            const copyState = {...state}
            delete copyState[action.todolistID]
            return copyState
        }

        default:
            return state
    }
}

export const removeTaskAC = (id: string, todolistID: string): RemoveTaskAT => {
    return {
        type: "REMOVE-TASKS",
        id,
        todolistID
    }
}

export const addTaskAC = (title: string, todolistID: string): AddTaskAT => {
    return {
        type: "ADD-TASK",
        title,
        todolistID
    }
}

export const changeTaskStatusAC = (id: string, isDone: boolean, todolistID: string): ChangeTaskStatusAT => {
    return {
        type: "CHANGE-TASK-STATUS",
        id,
        isDone,
        todolistID
    }
}


export const changeTaskTitleAC = (id: string, title: string, todolistID: string): ChangeTaskTitleAT => {
    return {
        type: "CHANGE-TASK-TITLE",
        id,
        title,
        todolistID
    }

}

export const removeTodolistWithTasksAC = (todolistID: string): RemoveTodolistAT => {
    return {
        type: "REMOVE-TODOLIST-WITH-TASKS",
        todolistID
    }
}
