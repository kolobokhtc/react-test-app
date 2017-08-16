/**
 * Created by eng210 on 16.08.2017.
 */

import React, {Component, PropTypes} from "react";
import Article from "./article";
import reqwest from "reqwest";
import {apiUrl} from "../../config";
import CircularProgress from 'material-ui/CircularProgress';

export default class PharagraphsContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var c = url.searchParams.get("articleURL");
        if (typeof c != 'undefined' && c.length > 0) {
            this.props.getPharagraphs(c);
        }
    }

    handleChanges(data) {

        var data = {
            articleUrl: this.props.uri,
            originalText: data.originalText,
            usersText: data.usersText
        };

        reqwest({
            url: apiUrl + '/store',
            method: 'post',
            type: 'json',
            data: data,
            success: function (resp) {
                console.log(resp);
            }
        });
    }

    render() {

        const {uri, title, pharagraphs, fetching, error} = this.props;

        return <div>

            {(!uri || uri.length < 10) ? 'enter valid url' : null}

            { fetching ? <CircularProgress /> : null}

            { error ? <p class="error">{error}</p> : null}

            <h1>
                {title}
            </h1>
            <div>
                { pharagraphs.map((item, index) => <Article className='btn' key={index} article={item} onSave={this.handleChanges.bind(this)}></Article>)}
            </div>
        </div>
    }

}

PharagraphsContainer.propTypes = {
    pharagraphs: PropTypes.array.isRequired
}
