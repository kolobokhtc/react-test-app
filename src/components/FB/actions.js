/**
 * Created by eng210 on 16.08.2017.
 */

import {GET_ARCTICLE_NAME, GET_PHARAGRAPHS_FAIL, GET_PHARAGRAPHS_REQUEST, GET_PHARAGRAPHS_SUCCESS, GET_RESULTS_FAIL, GET_RESULTS_REQUEST, GET_RESULTS_SUCCESS} from "./constants";
import {apiUrl} from "../../config";

import reqwest from "reqwest";

export function getPharagraphs(uri) {

    return (dispatch) => {
        dispatch({
            type: GET_PHARAGRAPHS_REQUEST,
            payload: uri
        });

        reqwest({
            url: apiUrl + '/article?url=' + uri
        })
            .then(function (resp) {
                if (resp.pharagraphs) {
                    dispatch({
                        type: GET_PHARAGRAPHS_SUCCESS,
                        payload: resp.pharagraphs
                    });
                }

                if (resp.title) {
                    dispatch({
                        type: GET_ARCTICLE_NAME,
                        payload: resp.title
                    })
                }
            })
            .fail(function (err, msg) {
                dispatch({
                    type: GET_PHARAGRAPHS_FAIL,
                    payload: 'Error while loading new data'
                });
            })
            .always(function (resp) {

            });

    }

}