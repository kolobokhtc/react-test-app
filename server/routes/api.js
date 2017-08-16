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

    var request = require('request'),
        cheerio = require('cheerio');

    request({uri: req.query.url, method: 'GET', encoding: 'binary'},
        function (err, res, page) {
        console.log(page);
            var $ = cheerio.load(page);
            var headline = $('h2.headline').html();
            var paragrafs = $('div.lab-bodytext-content p');
            console.log(paragrafs);
        });


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