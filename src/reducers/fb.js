/**
 * Created by eng210 on 16.08.2017.
 */

import {GET_ARCTICLE_NAME, GET_PHARAGRAPHS_FAIL, GET_PHARAGRAPHS_REQUEST, GET_PHARAGRAPHS_SUCCESS} from "../components/FB/constants";

const initialState = {
    uri: null,
    title: '',
    pharagraphs: [],
    fetching: false,
    error: null
};

export default function fb(state = initialState, action) {
    switch (action.type) {
        case GET_PHARAGRAPHS_REQUEST:
            return {...state, uri: action.payload, fetching: true, error: null};
            break;
        case GET_PHARAGRAPHS_SUCCESS:
            return {...state, pharagraphs: action.payload, fetching: false, error: null};
            break;
        case GET_PHARAGRAPHS_FAIL:
            return {...state, error: action.payload, fetching: false};
            break;
        case GET_ARCTICLE_NAME:
            return {...state, title: action.payload};
            break;
        default:
            return state;
    }
}