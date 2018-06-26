var express = require('express');
var Goods = require('../models/goods');

var router = express.Router();

router.get('/', function (req, res) {
    Goods.find({}, function (err, goods) {
        res.json({
            success: true,
            data: goods
        })
    })
})

router.post('/', function (req, res, next) {
    var name = req.body.name
    var type = req.body.type
    var foods = req.body.foods

    var user = new Orders({
        name: name,
        type: type,
        foods: foods
    })

    user.save(function (err,goods) {
        if (err) {
            res.json({
                success: false,
                message: '管理员创建失败'
            });
        }
        res.json({
            success:true,
            message: '管理员创建成功',
            data: goods
        })
    })
})

module.exports = router;