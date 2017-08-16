/**
 * Created by eng210 on 15.08.2017.
 */
import { createStore, applyMiddleware} from "redux";
import rootReducer from "../../reducers/index";
import thunk from "redux-thunk";

export default function configureFbStore(initialState){
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk));
    return store;
}