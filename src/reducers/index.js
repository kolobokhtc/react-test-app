/**
 * Created by eng210 on 15.08.2017.
 */
import {combineReducers} from "redux";
import fb from "./fb";
import user from "./user";
import selectedResult  from "./selectedResult";
import fbresults from "./list";

export default combineReducers({
    fb,
    user,
    fbresults: combineReducers({
        list: fbresults,
        selected: selectedResult
    })
})