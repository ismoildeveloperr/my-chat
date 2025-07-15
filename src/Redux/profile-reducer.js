const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, message: "Привет", likeCount: 3 },
        { id: 2, message: "Как дела?", likeCount: 5 },
        { id: 3, message: "Это первый мой пост", likeCount: 2 }
    ],
        newPostText: "My chat"
};


const profileReducer = (state =initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            const newPost = {
            id: state.postsData.length + 1,
                message: state.newPostText,
            likeCount: 0
    };
    let stateCopy = {...state};
    stateCopy.postsData = [...state.postsData];
    stateCopy.postsData.push(newPost);
    stateCopy.newPostText = "";
            return stateCopy;
    case UPDATE_NEW_POST_TEXT:{
        let stateCopy = {...state};

        stateCopy.newPostText = action.newText;
        return stateCopy;
    }
        default:
            return state;
    }


}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;