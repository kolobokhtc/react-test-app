/**
 * Created by eng210 on 15.08.2017.
 */

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('api page')
});

router.get('/article', function (req, res) {

    if (!req.query.url) {
        res.send('setup url');
    }

    var base = {
        title: 'Article title',
        pharagraphs: [
            'first pharagraph content',
            'second pharagraph content',
            'etc pharagraph content',
        ]
    };


    res.send(base);
});

module.exports = router;