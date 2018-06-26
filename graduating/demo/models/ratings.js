var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Ratings', new Schema({
    username: String,
    rateTime: Number,
    score: Number,
    rateType: Number,
    text: String,
    commentPics: String,
    userPic: String
}))