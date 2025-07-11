import {combineReducers, createStore} from "redux";
import messagesReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
})
let store = createStore(reducers);

export default store;