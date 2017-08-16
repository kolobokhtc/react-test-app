/**
 * Created by eng210 on 15.08.2017.
 */
import React, {Component} from "react";
import {Provider} from "react-redux";
import FB from "./fb";

import configureFbStore from "./store";

const store = configureFbStore();

class FBRoot extends Component {

    render() {
        return (
            <Provider store={store}>
                <FB/>
            </Provider>
        );
    }
}

export default FBRoot;