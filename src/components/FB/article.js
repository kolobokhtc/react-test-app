/**
 * Created by eng210 on 16.08.2017.
 */

import React, {Component} from "react";

export default class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            originalText: null,
            usersText: null,
        };
    }

    handleSubmit(event){
        this.props.onSave(this.state);
        event.preventDefault();
    }

    handleChange(event){
        this.setState({usersText: event.target.value});
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.article){
            this.setState({
                originalText: nextProps.article,
                usersText: nextProps.article,
            })
        }
    }

    render() {
        const {article} = this.props;
        return <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <span>Original text</span>
                <p>{this.state.originalText}</p>
            </div>
            <div>
                <span>User text</span>
                <div>
                    <textarea value={this.state.usersText} onChange={this.handleChange.bind(this)}></textarea>
                </div>
            </div>
            <button type="submit">Save text</button>
        </form>
    }

}