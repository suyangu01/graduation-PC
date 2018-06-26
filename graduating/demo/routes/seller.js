var express = require('express');
var Seller = require('../models/seller');

var router = express.Router();

router.get('/', function (req, res) {
    Seller.find({}, function (err, seller) {
        res.json({
            success: true,
            data: seller
        })
    })
})

router.put('/', function (req, res) {
    var {id, newName, newBulletin} = req.body
    Seller.findOneAndUpdate({_id: id}, {
        name: newName,
        bulletin: newBulletin
    }, function (err, seller) {
        if (err) {
            res.json({
                sucess: false,
                message: '修改失败'
            })
        }
        res.json({
            sucess: true,
            message: '修改成功'
        })
    })
})

module.exports = router;