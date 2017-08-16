/**
 * Created by eng210 on 16.08.2017.
 */

import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as ResultsActions from "./actions";
import ResultItem from "./item";

class Results extends Component {

    componentDidMount(){
        this.props.resultsActions.getResults();
    }

    handleDelete(id){
        this.props.resultsActions.remove(id);
    }

    handleApprove(id){
        this.props.resultsActions.approve(id);
    }

    render() {
        const {results} = this.props.fbresults;
        const {getResults, remove} = this.props.resultsActions;

        return (
            <div>
                {results.map((item, index)=> <ResultItem key={index} item={item} onDelete={this.handleDelete.bind(this, item.id)} onApprove={this.handleApprove.bind(this, item.id)}></ResultItem>)}
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