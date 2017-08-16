/**
 * Created by eng210 on 16.08.2017.
 */

import {GET_RESULTS_FAIL, GET_RESULTS_REQUEST, GET_RESULTS_SUCCESS, GET_RESULTS_REMOVE_ITEM, GET_RESULTS_APPROVE_ITEM} from "./constants";
import {apiUrl} from "../../config";

import reqwest from "reqwest";

export function getResults(){
    return (dispatch) => {
        dispatch({
            type: GET_RESULTS_REQUEST,
            payload: true
        });

        reqwest({
            url: apiUrl + '/results'
        })
            .then(function (resp) {
                if (resp.results) {
                    console.log(resp.results);
                    dispatch({
                        type: GET_RESULTS_SUCCESS,
                        payload: resp.results
                    });
                }
            })
            .fail(function (err, msg) {
                dispatch({
                    type: GET_RESULTS_FAIL,
                    payload: 'Error while loading new data'
                });
            })
            .always(function (resp) {

            });

    }
}

export function remove(id){
    return (dispatch) => {
        dispatch({
            type: GET_RESULTS_REMOVE_ITEM,
            payload: id
        });

    }
}

export function approve(id){
    return (dispatch) => {
        dispatch({
            type: GET_RESULTS_APPROVE_ITEM,
            payload: id
        });

    }
}
