/**
 * Created by eng210 on 16.08.2017.
 */

import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as ResultsActions from "./actions";

class Results extends Component {

    componentDidMount(){
        this.props.resultsActions.getResults();
    }

    render() {
        const {results} = this.props.fbresults;
        const {getResults} = this.props.resultsActions;

        return (
            <div>
                {results.map((item, index)=> <div key={index}>{item.id}</div>)}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        user: state.user,
        fbresults: state.fbresults
    }
}

function mapDispatchToProps(dispatch) {
    return {
        resultsActions: bindActionCreators(ResultsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)