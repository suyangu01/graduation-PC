var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Orders', new Schema({
    code: String,
    tableId: String,
    orderUser: String,
    orderTime: {type: Date, default: Date.now},
    menu: [
        {
            name: String,
            count: Number,
            allPrice: Number
        }
    ],
    totalPrice: Number
}))