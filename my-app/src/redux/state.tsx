export type dialogsType = {
    id: number;
    name: string;
}

export type messagesType = {
    id: number;
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
    id: number;
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
            {id: 1, name: 'Кларк Кент'},
            {id: 2, name: 'Барри Аллен'},
            {id: 3, name: 'Брюс Уэйн'},
            {id: 4, name: 'Питер Паркер'},
            {id: 5, name: 'Тони Старк'},
        ],
        messages: [
            {id: 1, message: 'Что интересного расскажешь?'},
            {id: 2, message: 'Куда поехал?'},
            {id: 3, message: 'Куда поехал?'},
            {id: 4, message: 'Куда поехал?'},
        ],
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Привет, как ты?', likeCounts: 11},
            {id: 2, message: 'Что сейчас учишь?', likeCounts: 19},
            {id: 3, message: 'Захвати пиццу по пути', likeCounts: 26},
        ],
    },
}

export default state;