import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-redicer";
import dialogsReducer from "./dialogs-reducer";

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
        },
        sidebar: {}
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

        this._state.profilePage= profileReducer(this._state.profilePage, action);
        this._state.messagesPage= dialogsReducer(this._state.messagesPage, action);

        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }

};


export default store;
window.store = store;
