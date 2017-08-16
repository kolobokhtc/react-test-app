/**
 * Created by eng210 on 16.08.2017.
 */

import React, {Component} from "react";
import reqwest from "reqwest";
import {apiUrl} from "../../config";

export default class ResultItem extends Component {

    constructor(props){
        super(props);

        this.state = {
            busy: false
        }
    }

    handleApprove(event) {

        event.preventDefault();

        var self = this;
        const {item} = this.props;

        item.isApproved = true;

        self.setState({busy: true})
        reqwest({
            url: apiUrl + '/results/' + item.id,
            method: 'put',
            type: 'json',
            data: item
        }).then(function (resp) {
            if (typeof self.props.onApprove == "function") {
                self.props.onApprove();
            }
        }).always(function (resp) {
            self.setState({busy: false})
        });


    }

    handleDelete(event) {

        event.preventDefault();

        var self = this;
        const {item} = this.props;

        reqwest({
            url: apiUrl + '/results/' + item.id,
            method: 'put',
            type: 'json',
            data: item
        }).then(function (resp) {
            if (typeof self.props.onDelete == "function") {
                self.props.onDelete();
            }
        }).always(function (resp) {
            self.setState({busy: false})
        });

    }

    render() {
        const {item} = this.props;
        const {busy} = this.state;
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
            { busy ? <div>processing</div> : <div><button onClick={this.handleDelete.bind(this)}>Delete</button><button onClick={this.handleApprove.bind(this)}>Approve</button></div>}

        </div>
    }

}