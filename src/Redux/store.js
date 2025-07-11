const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE="SEND_MESSAGE";
let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "Привет", likeCount: 3 },
                { id: 2, message: "Как дела?", likeCount: 5 },
                { id: 3, message: "Это первый мой пост", likeCount: 2 }
            ],
            newPostText: "My chat"
        },
        messagesPage: {
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
        }
    },

    _callSubscriber() {
        console.log("State was changed");
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost = {
                id: this._state.profilePage.postsData.length + 1,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.newPostText = "";

            this._state.profilePage.postsData.push(newPost);

            this._callSubscriber(this._state);

        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === "UPDATE_NEW_MESSAGE_BODY") {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);

        } else if (action.type === "SEND_MESSAGE") {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messagesData.push({ id: 6, text: body });
            this._callSubscriber(this._state);
        }
    }

};
    export const addPostActionCreator = () => ({type: ADD_POST});
   export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body:body})

export default store;
window.store = store;
