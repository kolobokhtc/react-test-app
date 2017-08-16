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

router.post('/store', function (req, res) {
    console.log(req.body);
    res.send(true);
});

router.put('/results/:id', function (req, res) {
    console.log('put', req.params.id, req.body);
    res.send(true);
});

router.delete('/results/:id', function (req, res) {
    console.log('delete', req.params.id);
    res.send(true);
});

router.get('/results', function (req, res) {
    var result = [];
    result.push({
        id: 1,
        articleUrl: 'articleUrl1',
        originalText: 'originalText1',
        usersText: 'usersText1',
        isApproved: false
    });
    result.push({
        id: 2,
        articleUrl: 'articleUrl2',
        originalText: 'originalText2',
        usersText: 'usersText2',
        isApproved: false
    });
    res.send({results: result});
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