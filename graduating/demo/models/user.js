var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    name: String,
    password: String,
    admin: Boolean,
    nickname: String,
    sex: String,
    age: Number,
    address: String,
    consume: Number,
    rank: String,
    registerTime: {type:Date,default:Date.now},
    tikect: [{
        type: String,
        value: Number,
        count: Number,
        description: String
    }]
}))