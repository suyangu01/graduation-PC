var express = require('express');
var Orders = require('../models/orders');

var router = express.Router();

router.get('/', function (req, res) {
    Orders.find({}, function (err, orders) {
        res.json({
            success: true,
            data: orders
        })
    })
})

router.post('/', function (req, res, next) {
    var tableId = req.body.tableId
    var totalPrice = req.body.totalPrice
    var menu = req.body.menu

    var user = new Orders({
        code: 'hello',
        orderUser: 'world',
        totalPrice: totalPrice,
        tableId: tableId,
        menu: menu
    })

    user.save(function (err,orders) {
        if (err) {
            res.json({
                success: false,
                message: '管理员创建失败'
            });
        }
        res.json({
            success:true,
            message: '管理员创建成功',
            data: orders
        })
    })
})

router.delete('/', function (req, res) {
    var {id} = req.body;
    console.log({id})
    Orders.remove({_id: id}, function (err) {
        if(err) {
            res.json({
                sucess: false,
                message: '删除分类失败'
            })
        }
        res.json({
            sucess: true,
            message: '删除分类成功'
        })
    })
})

module.exports = router;