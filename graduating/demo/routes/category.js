var express = require('express');
var Category = require('../models/category');
var router = express.Router();

router.post('/', function (req, res) {
    var category = new Category({
        typeId: req.body.typeId,
        typeName: req.body.typeName,
        myImage: req.body.myImage,
        seller: req.body.seller,
        address: req.body.address,
        phone: req.body.phone,
        price: req.body.price,
        description: req.body.description,
        publishTime: req.body.publishTime
    })
    category.save(function (err, categorys) {
        if (err) {
            res.json({
                success: false,
                message: '添加分类失败'
            })
        }
        res.json({
            success: true,
            message: '添加分类成功',
            data: categorys
        })
    })
})

// 查看所有分类
router.get('/', function (req, res) {
    var page = req.query.page == undefined ? 0 : req.query.page - 1;
    var limit = req.query.limit == undefined ? 1 : req.query.limit;
    var time = req.query.time == undefined ? 1 : req.query.time;
    Category.count({}, function (err, count) {
        Category.find({})
            .skip(page * 9)
            .limit(limit * 9)
            .sort({'time': time})
            .exec(function (err, categories) {
                if(err)res.json({success: false});
                res.json({
                    success: true,
                    data: categories,
                    count: count
                })
            });
    })
})

router.put('/', function (req, res) {
    var {title, newTitle} = req.body;
    Category.findOneAndUpdate({title: title}, {title: newTitle}, function (err, category) {
        if (err) {
            res.json({
                sucess: false,
                message: '更新分类失败'
            })
        }
        res.json({
            sucess: true,
            message: '更新分类失败'
        })
    })
})

// 查看分页
router.get('/:id', function (req, res) {
    var page = req.query.page == undefined ? 0 : req.query.page - 1;
    var limit = req.query.limit == undefined ? 1 : req.query.limit;
    Category.count({}, function (err, count) {
        Category.find({typeId: req.params.id})
            .skip(page * 9)
            .limit(limit * 9)
            .sort({'_id': -1})
            .exec(function (err, categories) {
                res.json({
                    success: true,
                    data: categories,
                    count: count
                })
            });
    })
})

// 查看单个分类详情
router.get('/detail/:id', function (req, res) {
    console.log(req.params.id)
    Category.findOne({_id: req.params.id})
        .exec(function (err, categories) {
            res.json({
                success: true,
                data: categories
            })
        });
})

router.delete('/', function (req, res) {
    console.log('delete category')

    var {title} = req.body;
    Category.remove({title: title}, function (err) {
        if (err) {
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