/**
 * Created by eng210 on 16.08.2017.
 */

import React, {Component} from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";

export default class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            originalText: '',
            usersText: '',
        };
    }

    handleSubmit(event) {
        this.props.onSave(this.state);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({usersText: event.target.value});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.article) {
            this.setState({
                originalText: nextProps.article,
                usersText: nextProps.article,
            })
        }
    }

    render() {
        const {article} = this.props;
        const style = {
            marginTop: '20px'
        };
        return <div style={style}>
            <Paper zDepth={1}>
                <form onSubmit={this.handleSubmit.bind(this)}>

                    <div>
                        <TextField
                            hintText="Original text"
                            floatingLabelText="Original text"
                            multiLine={true}
                            rows={2}
                            value={this.state.originalText}
                            disabled={true}
                            fullWidth={true}
                        />
                    </div>

                    <div>

                        <TextField
                            hintText="User text"
                            floatingLabelText="User text"
                            multiLine={true}
                            rows={2}
                            value={this.state.usersText}
                            fullWidth={true}
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <RaisedButton style={style} type="submit" label="Send changes"/>
                </form>
            </Paper>
        </div>
    }

}