const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const sellerSchema = mongoose.Schema({
    createdAt:{type:Date, default:Date.now()},
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:String,
    produtsSelled:String,//liste desproduits vendus
    avatar:String, //image optionnelle
});
sellerSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Seller', sellerSchema);