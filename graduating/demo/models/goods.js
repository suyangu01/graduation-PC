var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Goods', new Schema({
    name: String,
    type: Number,
    foods: [{
        name:String,
        price: Number,
        oldPrice: Number,
        description: String,
        sellCount: Number,
        rating: Number,
        image: String
    }]
}))