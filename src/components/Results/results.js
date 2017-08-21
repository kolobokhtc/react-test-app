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

    handleEdit(id){
        this.props.resultsActions.edit(id);
    }

    handleApprove(id){
        this.props.resultsActions.approve(id);
    }

    render() {
        const {results, fetching, edit} = this.props.fbresults.list;
        const {selected} = this.props.fbresults;
        const {getResults, remove} = this.props.resultsActions;

        return (
            <div>

                {edit ?
                    <div>We try to edit: {edit[0]._id}</div>
                    :  null}

                { fetching ? <p>Loading...</p> : null}

                {results.length > 0
                    ? results.map((item, index)=> <ResultItem onEdit={this.handleEdit.bind(this, item._id)} busy={(selected.items.indexOf(item._id) > -1) ? true : false} key={index} item={item} onDelete={this.handleDelete.bind(this, item._id)} onApprove={this.handleApprove.bind(this, item._id)}></ResultItem>)
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