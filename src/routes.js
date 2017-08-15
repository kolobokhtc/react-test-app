/**
 * Created by eng210 on 15.08.2017.
 */
import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import FB from './components/FB';
import NotFound from './components/NotFound';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App} />
        <Route path="/fb" component={FB} />
        <Route path="*" component={NotFound} />
    </Router>
);

export default Routes;