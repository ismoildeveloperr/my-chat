import {userAPI, profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS='SET_STATUS';
const DELETE_POST = 'DELETE-POST';
let initialState = {
    postsData: [
        { id: 1, message: "Привет", likeCount: 3 },
        { id: 2, message: "Как дела?", likeCount: 5 },
        { id: 3, message: "Это первый мой пост", likeCount: 2 }
    ],
    profile:null,
    status: ""
};


const profileReducer = (state =initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            const newPost = {
                id: state.postsData.length + 1,
                message: action.newPostText,
                likeCount: 0
            };
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        case SET_STATUS:{
            return {
                ...state,
                status:action.status};
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile};
        }
        case DELETE_POST:
            return {...state, postsData: state.postsData.filter(p=>p.id === action.postId)};
        default:
            return state;
    }


}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const  setUserProfile=(profile)=>({type: SET_USER_PROFILE, profile});
export const  setStatus=(status)=>({type: SET_STATUS, status});
export const  deletePost=(postId)=>({type: DELETE_POST, postId});
export const  getUserProfile=(userId)=>async (dispatch) =>{
   let response = await userAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
};

export const  getStatus=(userId)=>async (dispatch) =>{
   let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
};

export const updateStatus=(status)=>async (dispatch) =>{
  let response = await profileAPI.updateStatus(status)
        if(response.data.resultCode ===0){
            dispatch(setStatus(status));
        }
};


export default profileReducer;