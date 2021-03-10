import {createStore} from "redux";
import initialState from "./initialState";
import combineReducer from "./reducers/combine";

const store = createStore(combineReducer, initialState);

export default store;