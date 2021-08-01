const mongoose = require('mongoose');

async function config(){
    await mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log ("connexion réussie à mongoDB"))
    .catch(()=>console.log ("échec de connexion à mongoDB"));
}

module.exports.config = config