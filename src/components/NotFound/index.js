/**
 * Created by eng210 on 15.08.2017.
 */
import React, {Component} from "react";
import classnames from 'classnames';

class NotFound extends Component {
    render(){
        const {className, ...props} = this.props;
        return (
            <div className={classnames('About', className)} {...props}>
                <h1>
                    404 <small>Not Found :(</small>
                </h1>
            </div>
        );
    }
}

export default NotFound;