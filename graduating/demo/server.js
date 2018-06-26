var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan')
var mongoose = require('mongoose');
var path = require('path');

var jwt = require('jsonwebtoken');
var config = require('./config');
var setupRoute = require('./routes/setup');
var userRoute = require('./routes/users');
var categoryRoute = require('./routes/category');
var blogRoute = require('./routes/blog');
var sellerRoute = require('./routes/seller');
var goodsRoute = require('./routes/goods');
var ratingsRoute = require('./routes/ratings');
var ordersRoute = require('./routes/orders');

// var muterUtilsRoute = require('./routes/muterUtils');
var upload = require('./models/fileUpload');

// 微信小程序 图片上传
// var multer = require('multer');
// // var upload = multer({dest: './public/images'});
var fs = require('fs'); // 载入fs模块

// var storage = multer.diskStorage({
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// })

var port = process.env.PORT || 8090;
mongoose.connect(config.database);
app.set('superSecret', config.secret);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(morgan('dev'));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Methods: POST');
    res.header('Access-Control-Max-Age: 1000');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

app.use('/static', express.static('public'));
//文件上传服务
app.post('/upload', upload.single('file'), function (req, res, next) {
    if (req.file == undefined) {
        res.send("请选择要上传的图片...");
    } else {
        var str = "文件上传成功...";
        for (var i = 0; i < req.file.length; i++) {
            console.log(str)
            var filepath = __dirname + "/tmp/" + req.file[i].originalname;
            fs.renameSync(req.file[i].path, filepath);
            res.send(`www.xiaoxiangba.com/images/`+req.file.filename)
        }
    };
    next();
});

app.get('/', function (req, res) {
    res.send("校享吧接口");
})

app.use('/setup', setupRoute);

app.use('/user', userRoute);

app.use('/category', categoryRoute);

app.use('/blog', blogRoute);

app.use('/seller', sellerRoute);

app.use('/goods', goodsRoute);

app.use('/ratings', ratingsRoute);

app.use('/orders', ordersRoute);

app.listen(port);
console.log('http://localhost:' + port);