/**
 * Created by eng210 on 16.08.2017.
 */

import React, {Component} from "react";
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

export default class ResultItem extends Component {

    render() {
        const {item, busy} = this.props;
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
                            <RaisedButton label="Delete" onClick={()=>{this.props.onDelete()}} />
                            <RaisedButton label="Approve" disabled={item.isApproved} onClick={()=>{this.props.onApprove()}} />
                        </div>
                    }
                </CardActions>
            </Card>
        </div>
    }

}