var express = require('express');
var User = require('../models/user');

var router = express.Router();

router.get('/', function (req, res) {
    var admin = new User({
        name:'admin',
        password: 'admin',
        admin: true
    })

    admin.save(function (err) {
        if (err) {
            res.json({
                success: false,
                message: '管理员创建失败'
            });
        }
        res.json({
            success:true,
            message: '管理员创建成功'
        })
    })
})

module.exports = router;