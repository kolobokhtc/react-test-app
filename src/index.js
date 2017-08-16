import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { browserHistory } from 'react-router';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Routes from './routes';

ReactDOM.render(<MuiThemeProvider><Routes history={browserHistory} /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
