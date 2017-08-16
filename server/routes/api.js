/**
 * Created by eng210 on 15.08.2017.
 */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/', function (req, res) {
    res.send('api page')
});

router.post('/store', function (req, res){
    console.log(req.body);
    res.send(true);
});

router.get('/results', function (req, res){
    var result = [];
    result.push({
        id: 1123,
        articleUrl: 'articleUrl',
        originalText: 'originalText',
        usersText: 'usersText',
        isApproved: 'isApproved'
    });
    res.send(result);
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