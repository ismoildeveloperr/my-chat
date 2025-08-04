
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: "Пользователь 1" },
        { id: 2, name: "Пользователь 2" },
        { id: 3, name: "Пользователь 3" },
        { id: 4, name: "Пользователь 4" }
    ],
    messagesData: [
        { id: 1, text: "Привет" },
        { id: 2, text: "Как дела?" },
        { id: 3, text: "Доброе утро" },
        { id: 4, text: "Бегаю" }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {


        case SEND_MESSAGE: {
            const newMessage = {
                id: state.messagesData.length + 1,
                text: action.newMessageBody
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };
        }

        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
