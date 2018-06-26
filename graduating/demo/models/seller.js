var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Seller', new Schema({
    name: String,
    score: Number,
    serviceScore: Number,
    foodScore: Number,
    deliveryTime: Number,
    ratingCount: Number,
    praiseRate: String,
    sellCount: Number,
    goodsCount: Number,
    averageCost: Number,
    bulletin: String,
    discounts: [{taype: Number},{description: String}],
    infos:[String]
}))