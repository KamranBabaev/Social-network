import {TodolistType} from "../App";
import {v1} from "uuid";
import {FilterValuesType} from "../components/Todolist/Todolist";

export type RemoveTodolistAT = {
    type: "REMOVE-TODOLIST"
    id: string
}

export type AddTodolistAT = {
    type: "ADD-TODOLIST"
    title: string
    todolistID: string
}

export type ChangeTodolistTitleAT = {
    type: "CHANGE-TODOLIST-TITLE"
    id: string
    title: string
}

export type ChangeTodolistFilterAT = {
    type: "CHANGE-TODOLIST-FILTER"
    id: string
    filter: FilterValuesType
}

type ActionsType = RemoveTodolistAT | AddTodolistAT | ChangeTodolistTitleAT | ChangeTodolistFilterAT

let todolistID1 = v1();
let todolistID2 = v1();

const initialState: Array<TodolistType> = [
    {id: todolistID1, title: 'План обучения на сегодня', filter: 'ALL'},
    {id: todolistID2, title: 'Список покупок', filter: 'ALL'},
]

export const todolistsReducer = (state: Array<TodolistType> = initialState, action: ActionsType): Array<TodolistType> => {
    switch (action.type) {

        case "REMOVE-TODOLIST":
            return state.filter(tl => tl.id !== action.id)

        case "ADD-TODOLIST":
            return [...state, {id: action.todolistID, title: action.title, filter: "ALL"}]

        case "CHANGE-TODOLIST-TITLE": {
            const todolist = state.find(tl => tl.id === action.id)
            if (todolist) {
                todolist.title = action.title
            }
            return [...state]
        }

        case "CHANGE-TODOLIST-FILTER": {
            const todolist = state.find(tl => tl.id === action.id)
            if (todolist) {
                todolist.filter = action.filter
            }
            return [...state]
        }

        default:
            return state
    }
}


export const removeTodolistAC = (todolistID: string): RemoveTodolistAT => {
    return {
        type: "REMOVE-TODOLIST", id: todolistID
    }
}

export const addTodolistAC = (title: string): AddTodolistAT => {
    return {
        type: "ADD-TODOLIST",
        title,
        todolistID: v1()
    }
}

export const changeTodolistTitleAC = (id: string, title: string): ChangeTodolistTitleAT => {
    return {
        type: "CHANGE-TODOLIST-TITLE",
        id,
        title
    }
}

export const changeTodolistFilterAC = (id: string, filter: FilterValuesType): ChangeTodolistFilterAT => {
    return {
        type: "CHANGE-TODOLIST-FILTER",
        id,
        filter
    }
}
