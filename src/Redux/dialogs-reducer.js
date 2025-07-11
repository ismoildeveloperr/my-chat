const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE="SEND_MESSAGE";

let initialState = {
    dialogsData: [
        { id: 1, name: "Исмоил" },
        { id: 2, name: "Фирдавс" },
        { id: 3, name: "Фирӯз" },
        { id: 4, name: "Шоҳин" }
    ],
        messagesData: [
        { id: 1, text: "Привет" },
        { id: 2, text: "Как дела?" },
        { id: 3, text: "Доброе утро" },
        { id: 4, text: "Бегаю" }
    ],
        newMessageBody: ""
};
const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({ id: 6, text: body });
            return state;
        default: return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body:body})
export default dialogsReducer;