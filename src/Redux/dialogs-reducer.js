const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = { ...state };
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }

        case SEND_MESSAGE: {
            const newMessage = {
                id: state.messagesData.length + 1,
                text: state.newMessageBody
            };
            let stateCopy = { ...state };
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageBody = '';
            return stateCopy;
        }

        default:
            return state;
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body });

export default dialogsReducer;
