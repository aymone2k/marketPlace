//pr valider les données reçues du formulaire

const Validator = require('node-input-validator');

const productValidator = (req, res, next)=>{
    const v = new Validator(req.body,{
        title:'required',
        description:'required',
        price:'required',
        stock:'required',
        image:'required'
    });

    v.check().then((matched)=>{
        if(!matched){
            return res.status(400).json(v.errors);
        }
        next();
    })

}

module.exports = productValidator;