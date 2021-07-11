import {v1} from "uuid";
import {TaskType} from "../AppWithRedux";
import {todolistID1, todolistID2} from "./todolists-reducer";

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

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


// так как может приходить undefined и мап по нему выдаст ошибку
const initState: TasksStateType = {
    [todolistID1]: [
        {id: v1(), title: 'CSS', isDone: false},
        {id: v1(), title: 'HTML', isDone: false},
        {id: v1(), title: 'JS', isDone: false},
    ],
    [todolistID2]: [
        {id: v1(), title: 'продукты', isDone: false},
        {id: v1(), title: 'книги', isDone: false},
        {id: v1(), title: 'мебель', isDone: false},
    ]
}

export const tasksReducer = (state: TasksStateType = initState, action: ActionsType): TasksStateType => {
    switch (action.type) {

        case "REMOVE-TASKS":
            return {
                ...state,
                [action.todolistID]: state[action.todolistID].filter(t => t.id !== action.id)
            }

        case "ADD-TASK": {
            const newTask = {id: action.todolistID, title: action.title, isDone: false}
            return {
                ...state,
                [action.todolistID]: [newTask, ...state[action.todolistID]]
            }
        }

        case "CHANGE-TASK-STATUS":
            return {
                ...state,
                [action.todolistID]: state[action.todolistID]
                    .map(t => t.id === action.id
                        ? {...t, isDone: action.isDone}
                        : t)
            }

        case "CHANGE-TASK-TITLE":
            return {
                ...state,
                [action.todolistID]: state[action.todolistID]
                    .map(t => t.id === action.id
                        ? {...t, title: action.title}
                        : t)
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
