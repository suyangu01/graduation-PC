var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Category', new Schema({
    typeId: { type: Number, default: 0},
    name: { type: String, default: ''},
    typeName: { type: String, default: ''},
    myImage : { type: String, default: ''},
    seller : { type: String, default: ''},
    address : { type: String, default: ''},
    phone : { type: Number, default: 0},
    price : { type: Number, default: 0},
    description : { type: String, default: ''},
    publishTime: { type: String, default: ''},
    imgUrl : [],
    like : [],
    comment : [],
    see : [],
    time:{ type: Date, default: new Date()}
}))