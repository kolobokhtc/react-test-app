/**
 * Created by eng210 on 15.08.2017.
 */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test-db');
var ArticleEntity = require('../db_models/article');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/', function (req, res) {
    res.send('api page')
});

router.post('/results', function (req, res) {

    var articleEntity = new ArticleEntity();

    if (req.body.articleUrl) {
        articleEntity.articleUrl = req.body.articleUrl;
    }

    if (req.body.originalText) {
        articleEntity.originalText = req.body.originalText;
    }

    if (req.body.usersText) {
        articleEntity.usersText = req.body.usersText;
    }

    articleEntity.save(function (err) {
        if (err) {
            res.send({status: false, error: true});
        }

        res.send({status: true, error: false});

    });

});

router.put('/results/:id', function (req, res) {

    ArticleEntity.findById(req.params.id, function (err, article) {

        if (err) {
            res.send({status: false, error: true});
        }

        article.isApproved = req.body.isApproved;

        article.save(function (err) {

            if (err) {
                res.send({status: false, error: true});
            }

            res.send({status: true, error: false});

        })


    });

});

router.delete('/results/:id', function (req, res) {
    ArticleEntity.findById(req.params.id, function (err, article) {

        if (err) {
            res.send({status: false, error: true});
        }

        article.remove(function (err) {

            if (err) {
                res.send({status: false, error: true});
            }

            res.send({status: true, error: false});

        })


    });

});

router.get('/results', function (req, res) {
    var result = [];
    ArticleEntity.find({}, function (err, articles) {
        if (err) throw err;

        result = articles;

        res.send({results: result});
    });


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