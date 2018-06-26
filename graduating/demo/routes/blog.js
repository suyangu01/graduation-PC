var express = require('express');
var Blog = require('../models/blog');

var router = express.Router();

router.get('/', function (req, res) {
    var {category} = req.query;
    console.log(req.query)
    if (category) {
        var reg = new RegExp('^' + category + '$');
        var whereObj = {category: reg}
    }

    Blog.find(whereObj, function (err, blogs) {
        res.json({
            sucess: true,
            data: blogs
        })
    })
})

router.post('/', function (req, res) {
    var {title, body, author, tags, hidden, category} = req.body;
    if (title.length < 3) {
        res.json({
            sucess: false,
            message: '标题长度不能小于3'
        })
    }
    var tagsArray = tags.split(",");
    var tagsObjArray = [];
    tagsArray.forEach(function (v) {
        console.log(v)
        tagsObjArray.push({title: v})
    });
    var blog = new Blog({
        title,
        body,
        author,
        tags: tagsObjArray,
        hidden,
        category
    });
    blog.save(function (err) {
        if (err) {
            res.json({
                sucess: false,
                message: '博客发布失败'
            });
        }
        res.json({
            sucess: true,
            message: '博客发布成功'
        })
    })
})

module.exports = router;