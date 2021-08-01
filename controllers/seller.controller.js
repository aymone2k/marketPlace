const Seller = require('../models/seller.model');
const bcrypt = require('bcrypt');
const passport = require('passport');


module.exports = {

getAllSeller:(req, res, next)=>{
    Seller.find()
    .then((sellers)=>{
        return res.status(200).json(sellers)})
    .catch((err)=>{
        return res.status(400).json(err)})
},

signUpSeller:(req, res, next)=>{
    const newSeller = new Seller({
        name: req.body.name,
        email: req.body.email,
        avatar: req.body.avatar,
    });

    Seller.register(newSeller, req.body.passport, (err, seller)=>{

    })
    newSeller.save()
    .then((newSeller)=>{
        return res.status(201).json({message:'compte vendeur crée'})})
    .catch((err)=>{
        return res.status(400).json((err));
    }) 
},

loginSeller:(req, res, next)=>{

},


updateProfileSeller:(req, res, next)=>{
    const id = req.params.id
    Seller.find({_id:id}, (err, seller)=>{
        seller.name = req.body.name ? req.body.name : seller.name;
        seller.email = req.body.email ? req.body.email : seller.email;
        seller.name = req.body.name ? req.body.name : seller.name;
        seller.avatar = req.body.avatar ? req.body.avatar : seller.avatar;

    })
},

deleteProfileSeller:(req, res, next)=>{},

//forgotPasswordSeller:(req, res, next)={},

//resetPasswordSeller:(req, res, next)={},

}