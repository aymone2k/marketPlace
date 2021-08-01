const Validator = require('node-input-validator');

const sellerValidator = (req, res, next)=>{
    const v = new Validator(req.body,{
        name:'required',
        email:'required',
        password:'required',
    });

    v.check().then((matched)=>{
        if(!matched){
            return res.status(400).json(v.errors);
        }
        next();
    })

}

module.exports = sellerValidator;