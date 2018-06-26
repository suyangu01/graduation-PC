var express = require('express');
var app = express();
var User = require('../models/user');
// var UserInfo = require('../models/userinfo')

var jwt = require('jsonwebtoken');
var config = require('../config');
app.set('superSecret', config.secret);

var router = express.Router();

router.post('/login', function (req, res) {
    User.findOne({
        name: req.body.name,
        password: req.body.password
    }, function (err, users) {
        if (err) {
            res.json({success: false, message: '登录失败'});
        }
        if (!users) {
            res.json({success: false, message: '账号或密码错误'});
        } else {
            var token = jwt.sign({name: 'foo'}, app.get('superSecret'));
            res.json({
                success: true,
                message: '恭喜，登录成功',
                token: token,
                data: users.userInfos
            })
        }
    })
})

router.post('/register', function (req, res) {
    console.log(req.body.name);
    var user = new User({
        name: req.body.name,
        password: req.body.password,
        admin: true,
        nickname: '请修改昵称',
        sex: '未知',
        age: 0,
        address: '',
        consume: 0,
        rank: 0,
        tikect: 0
    })

    User.find({name: user.name}, function (err, users) {
        if (users.length > 0) {
            res.json({
                success: false,
                message: '该用户名已存在'
            })
        } else {
            user.save(function (err, user) {
                if (err) {
                    res.json({
                        success: false,
                        message: '请输入账号和密码，请重新注册'
                    })
                }
                res.json({
                    success: true,
                    message: '恭喜，注册成功'
                })
            })
        }
    })
})

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
