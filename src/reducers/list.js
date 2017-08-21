/**
 * Created by eng210 on 21.08.2017.
 */
/**
 * Created by eng210 on 16.08.2017.
 */

import {GET_RESULTS_FAIL, GET_RESULTS_SUCCESS, GET_RESULTS_REQUEST, GET_RESULTS_REMOVE_ITEM, GET_RESULTS_APPROVE_ITEM, GET_RESULTS_EDIT_ITEM} from "../components/Results/constants";

const initialState = {
    results: [],
    fetching: false,
    error: null,
    edit: null
};

export default function fbresults(state = initialState, action) {
    switch (action.type) {
        case GET_RESULTS_REQUEST:
            return {...state, fetching: true, error: null};
            break;
        case GET_RESULTS_SUCCESS:
            return {...state, results: action.payload, fetching: false, error: null};
            break;
        case GET_RESULTS_FAIL:
            return {...state, error: action.payload, fetching: false};
            break;
        case GET_RESULTS_REMOVE_ITEM:
            return {...state, results: state.results.filter((item) => {
                if(item._id !== action.payload) return item;
            }), fetching: false, error: null};
            break;
        case GET_RESULTS_EDIT_ITEM:
            return {...state, edit: state.results.filter((item) => {
                if(item._id == action.payload) return item;
            }), fetching: false, error: null};
            break;
        case GET_RESULTS_APPROVE_ITEM:
            return {...state, results: state.results.filter((item) => {
                if(item._id !== action.payload) return item;
            }), fetching: false, error: null};
            break;
        default:
            return state;
    }
}