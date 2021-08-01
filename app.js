var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('./middleware/services/corsConnect');

const Product = require('./models/product.model');
const User = require('./models/user.model');
const Seller = require('./models/seller.model');

var indexRouter = require('./routes/index.routes');
var usersRouter = require('./routes/users.routes');
var sellersRouter = require('./routes/sellers.routes');


var app = express(); 

//cors
app.use(cors);
//database
require('./middleware/services/dataBase').config();

//init passport
app.use(passport.initialize());
app.use(passport.session());

//passport-local-mongoose
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(Seller.createStrategy());
passport.serializeUser(Seller.serializeUser());
passport.deserializeUser(Seller.deserializeUser()); 


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



for (let index = 0; index < 7; index++) {
    product = new Product({
        createdAt:Date.now(),
        title:`produit N° ${index}`,
        description:`description du produit N° ${index}`,
        price:20,
        stock:10,
        image:'image',
        sellerId:'String',//le vendeur
        orderId:'String',
    })
  //  product.save();
}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sellers', sellersRouter);

module.exports = app;
