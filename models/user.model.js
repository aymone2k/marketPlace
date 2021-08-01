const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    createdAt: {type:Date, default:Date.now()},
    name:{type:String, required:true},
    email:{type:String, required:true},
   address:{type:String, required:true},
   password:{type:String, required:true},
   orders: String, // liste de commande rattachées à un client
});
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);