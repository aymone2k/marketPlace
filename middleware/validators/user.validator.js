const Validator = require('node-input-validator');

const userValidator = (req, res, next)=>{
    const v = new Validator(req.body,{
        name:'required',
        email:'required',
        password:'required',
        address:'required',
       
    });

    v.check().then((matched)=>{
        if(!matched){
            return res.status(400).json(v.errors);
        }
        next();
    })

}

module.exports = userValidator;