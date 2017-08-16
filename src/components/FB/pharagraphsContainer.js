/**
 * Created by eng210 on 16.08.2017.
 */

import React, {Component, PropTypes} from "react";

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

    render() {

        const {uri, title, pharagraphs, fetching, error} = this.props;

        return <div>

            {(!uri || uri.length < 10) ? 'enter valid url' : null}

            { fetching ? <p>Загрузка</p> : null}

            { error ? <p class="error">{error}</p> : null}
            {/*<span>{uri}</span>*/}
            <h1>
                {title}
            </h1>
            <ul>
                { pharagraphs.map((item, index) => <li className='btn' key={index}>{item}</li>)}
            </ul>
        </div>
    }

}

PharagraphsContainer.propTypes = {
    pharagraphs: PropTypes.array.isRequired
}
