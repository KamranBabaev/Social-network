import {v1} from "uuid";

export type dialogsType = {
    id: string;
    name: string;
}

export type messagesType = {
    id: string;
    message: string;
}

type messagePageType = {
    dialogs: Array<dialogsType>;
    messages: Array<messagesType>;
}

type profilePageType = {
    posts: Array<postsType>
}

type postsType = {
    id: string;
    message: string;
    likeCounts: number;
}

export type stateType = {
    messagePage: messagePageType;
    profilePage: profilePageType;
}

let state: stateType = {
    messagePage: {
        dialogs: [
            {id: v1(), name: 'Кларк Кент'},
            {id: v1(), name: 'Барри Аллен'},
            {id: v1(), name: 'Брюс Уэйн'},
            {id: v1(), name: 'Питер Паркер'},
            {id: v1(), name: 'Тони Старк'},
        ],
        messages: [
            {id: v1(), message: 'Что интересного расскажешь?'},
            {id: v1(), message: 'Куда поехал?'},
            {id: v1(), message: 'Куда поехал?'},
            {id: v1(), message: 'Куда поехал?'},
        ],
    },
    profilePage: {
        posts: [
            {id: v1(), message: 'Привет, как ты?', likeCounts: 11},
            {id: v1(), message: 'Что сейчас учишь?', likeCounts: 19},
            {id: v1(), message: 'Захвати пиццу по пути', likeCounts: 26},
        ],
    },
}

export let addPost = (postMessage: string) => {
    let newPost = {
        id: v1(), message: postMessage, likeCounts: 0
    }
    state.profilePage.posts.push(newPost)
}

export default state;