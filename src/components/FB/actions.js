/**
 * Created by eng210 on 16.08.2017.
 */

import {GET_PHARAGRAPHS_REQUEST, GET_PHARAGRAPHS_SUCCESS, GET_ARCTICLE_NAME} from "./constants";

export function getPharagraphs(uri) {

    return (dispatch) => {
        dispatch({
            type: GET_PHARAGRAPHS_REQUEST,
            payload: uri
        });

        setTimeout(() => {
            dispatch({
                type: GET_PHARAGRAPHS_SUCCESS,
                payload: [
                    'first pharagraph content',
                    'second pharagraph content',
                    'etc pharagraph content',
                ]
            });
            dispatch({
                type: GET_ARCTICLE_NAME,
                payload: 'new name'
            })
        }, 1000)
    }

}