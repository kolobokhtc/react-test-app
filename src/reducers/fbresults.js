/**
 * Created by eng210 on 16.08.2017.
 */

import {GET_RESULTS_FAIL, GET_RESULTS_SUCCESS, GET_RESULTS_REQUEST} from "../components/Results/constants";

const initialState = {
    results: [],
    fetching: false,
    error: null,
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
        default:
            return state;
    }
}