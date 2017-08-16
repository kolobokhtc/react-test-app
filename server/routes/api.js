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

    var response = res;

    request({uri: req.query.url, method: 'GET', encoding: 'UTF-8'},
        function (err, res, page) {
            var base = {
                title: null,
                pharagraphs: []
            };
            var $ = cheerio.load(page);
            base.title = $('h2.headline').html();
            $('div.lab-bodytext-content p').each(function () {
                base.pharagraphs.push($(this).text());
            });

            response.send(base);
        });

});

module.exports = router;