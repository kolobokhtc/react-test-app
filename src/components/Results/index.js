/**
 * Created by eng210 on 15.08.2017.
 */
import React, {Component} from "react";
import {Provider} from "react-redux";
import Results from "./results";

import configureFbStore from "./store";

const store = configureFbStore();

class ResultsRoot extends Component {

    render() {
        return (
            <Provider store={store}>
                <Results/>
            </Provider>
        );
    }
}

export default ResultsRoot;