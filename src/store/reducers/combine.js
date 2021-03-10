import {combineReducers} from "redux";
import profileReducer from "./profile";
import messengerReducer from "./masseger";

const combineReducer = combineReducers({
    profilePage: profileReducer,
    messengerPage: messengerReducer,
});

export default combineReducer;