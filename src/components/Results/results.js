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
        const {results, fetching} = this.props.fbresults;
        const {getResults, remove} = this.props.resultsActions;

        return (
            <div>
                { fetching ? <p>Loading...</p> : null}

                {results.length > 0
                    ? results.map((item, index)=> <ResultItem key={index} item={item} onDelete={this.handleDelete.bind(this, item._id)} onApprove={this.handleApprove.bind(this, item._id)}></ResultItem>)
                    : <div>empty</div>
                }
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