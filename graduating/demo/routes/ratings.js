var express = require('express');
var Ratings = require('../models/ratings');

var router = express.Router();

router.get('/', function (req, res) {
    Ratings.find({}, function (err, ratings) {
        res.json({
            success: true,
            data: ratings
        })
    })
})

module.exports = router;