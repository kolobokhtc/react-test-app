/**
 * Created by eng210 on 15.08.2017.
 */

var express = require('express');
var app = express();
var port = process.env.PORT || 3001;

var api = require('./routes/api.js');

app.use('/api', api);

app.listen(port);
console.log('api server start on port ' + port);