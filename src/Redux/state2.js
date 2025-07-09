const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
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
            ]
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
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});


export default store;
window.store = store;