const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    createdAt:{type:Date, default:Date.now()},
    products: String,//liste des produits d'une commande, plrs produits
    buyer: String, //rattaché à user 1 acheteur
})

module.exports = mongoose.model('Order', orderSchema)