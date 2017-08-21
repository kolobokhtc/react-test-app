/**
 * Created by eng210 on 21.08.2017.
 */

import {SET_RESULT_BUSY, UNSET_RESULT_BUSY} from "../components/Results/constants";

const initialState = {
    items: []
};

export default function selectedResult(state = initialState, action){
    switch (action.type) {
        case SET_RESULT_BUSY:
            state.items.push(action.payload);
            return {items: state.items};
            break;
        case UNSET_RESULT_BUSY:
            return state;
            return {items: state.items.filter((id)=>{
                if (id != action.payload){
                    return id;
                }
            })};
            break;
        default:
            return state;
    }
}