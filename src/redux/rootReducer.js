import { combineReducers } from "redux";
import {postReducer} from './reducer/userReducer'
export const rootReducer=combineReducers({
    user:postReducer
})