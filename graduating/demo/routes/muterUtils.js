var express = require('express');
var router = express.Router();
var upload = require('../models/fileUpload');
//文件上传服务
router.get('/', upload.single('file'), function (req, res, next) {
    if (req.file) {
        res.send('文件上传成功')
        console.log(req.file);
        console.log(req.body);
    }
});