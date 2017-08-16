/**
 * Created by eng210 on 16.08.2017.
 */

import React, {Component} from "react";
import reqwest from "reqwest";
import {apiUrl} from "../../config";

export default class ResultItem extends Component {

    handleApprove(event) {

        var self = this;
        const {item} = this.props;

        item.isApproved = true;

        reqwest({
            url: apiUrl + '/results/' + item.id,
            method: 'put',
            type: 'json',
            data: item,
            success: function (resp) {
                if (typeof self.props.onApprove == "function") {
                    self.props.onApprove();
                }
            }
        });

        event.preventDefault();
    }

    handleDelete(event) {

        var self = this;
        const {item} = this.props;

        reqwest({
            url: apiUrl + '/results/' + item.id,
            method: 'delete',
            type: 'json',
            success: function (resp) {
                if (typeof self.props.onDelete == "function") {
                    self.props.onDelete();
                }
            }
        });

        event.preventDefault();
    }

    render() {
        const {item} = this.props;
        return <div>
            {item.isApproved == true ? <div>Approved</div> : null }
            <div>
                <span>Original text</span>
                <p>{item.originalText}</p>
            </div>
            <div>
                <span>User text</span>
                <div>
                    <p>{item.usersText}</p>
                </div>
            </div>
            <button onClick={this.handleDelete.bind(this)}>Delete</button>
            <button onClick={this.handleApprove.bind(this)}>Approve</button>
        </div>
    }

}