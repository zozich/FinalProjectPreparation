import {combineReducers} from "redux";
import loading from "./loading";
import userStatus from "./userStatus";

export default combineReducers({
    userStatus,
    loading
})