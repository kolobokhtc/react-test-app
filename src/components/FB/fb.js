/**
 * Created by eng210 on 16.08.2017.
 */

import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import PharagraphsContainer from "./pharagraphsContainer";
import * as FBActions from "./actions";

class FB extends Component {

    render() {
        const {uri, title, pharagraphs, fetching} = this.props.fb;
        const {getPharagraphs} = this.props.fbActions;

        return (
            <div>
                <PharagraphsContainer uri={uri} title={title} pharagraphs={pharagraphs} getPharagraphs={getPharagraphs} fetching={fetching}></PharagraphsContainer>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        user: state.user,
        fb: state.fb
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fbActions: bindActionCreators(FBActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FB)