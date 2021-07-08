import {TodolistType} from "../App";
import {v1} from "uuid";

type RemoveTodolistAT = {
    type: "REMOVE-TODOLIST"
    id: string
}

type AddTodolistAT = {
    type: "ADD-TODOLIST"
    title: string
}

type ChangeTodolistTitleAT = {
    type: 'CHANGE-TODOLIST-TITLE'
    action: any
}

type ActionType = RemoveTodolistAT | AddTodolistAT | ChangeTodolistTitleAT

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType): Array<TodolistType> => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return state.filter(tl => tl.id !== action.id)

        case "ADD-TODOLIST":
            return [...state, {id: v1(), title: action.title, filter: "ALL"}]

        case "CHANGE-TODOLIST-TITLE":
            const todolist = state.find(tl => tl.id === action.id)
            if (todolist) {
                todolist.title = action.title
            }
            return [...state]

        default:
            throw new Error("I don't understand this type")
    }

}