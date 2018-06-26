var express = require('express');
var router = express.Router();

//引用连接数据库Model
var TestModel = require('../models/testDB');

// test 数据

var resData = [];
resData.push(
    {
        SortID: "1",
        Name: "A",
        Sex: "女",
        Address: "SSS",
        timeDate: "05-08"
    }
);
// resData.push(
//     {
//         SortID: "2",
//         Name: "B",
//         Sex: "男",
//         Address: "XXX",
//         timeDate: "05-08"
//     }
// );

// 初始化回显 数据库已录入数据
router.get('/', function (req, res, next) {
    // res.render('testDB', {title: 'Express'});
    console.log('123')
    TestModel.find({}, function (err, resData) {
        if (err) return next(err);
        res.render('index', {
            title: "TestDB",
            testData: resData
        });
    });
});

//1 可以直接用Form表单方式提交数据
//2 或者通过页面脚本绑定事件响应结合JQuery的Ajax
//  实现调用路由（controller）接口将数据写入数据库
//一般开发中会在页面脚本中调用很多其他或者外部接口//【该方式比较常用 即就把路由方法当成一个对外的接口】
router.post('/insert', function (req, res) {
    var params = req.body;
    console.log('123')
    //MogoDB中可以用Create方法添加数据
    TestModel.create(params, function (err) {
        if (err) res.end('{result:-1}');
        else {
            TestModel.find({}, function (error, data) {
                if (error) res.end('{result:-1}');
                else {
                    res.end('{result:1,data:' + data + '}');
                }
            });
        }
    });
});
module.exports = router;