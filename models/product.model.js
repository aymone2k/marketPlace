const mongoose = require('mongoose');

const productSchema= mongoose.Schema({
    createdAt:{type:Date, default:Date.now()},
    title:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
    stock:{type:Number, required:true},
    image:{type:String, required:true},
    sellerId:String,//le vendeur
    orderId:String, //la commande rattaché au produit
})

module.exports = mongoose.model('Product', productSchema)