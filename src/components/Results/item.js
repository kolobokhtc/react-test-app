/**
 * Created by eng210 on 16.08.2017.
 */

import React, {Component} from "react";
import reqwest from "reqwest";
import {apiUrl} from "../../config";
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

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
        return <div className="block">
            <Card>
                <CardHeader
                    title={item.originalText}
                    subtitle="Original text"
                />
                <CardHeader
                    title={item.usersText}
                    subtitle="User text"
                />
                <CardActions>
                    { busy
                        ? <CircularProgress />
                        : <div>
                            <RaisedButton label="Delete" onClick={this.handleDelete.bind(this)} />
                            <RaisedButton label="Approve" disabled={item.isApproved} onClick={this.handleApprove.bind(this)} />
                        </div>
                    }
                </CardActions>
            </Card>
        </div>
    }

}