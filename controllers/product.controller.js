const Product = require('../models/product.model');
const fs = require('fs');

module.exports ={

/**
 * retourne l'ensemble des produits vendus sur le site
 */
allProducts:(req, res, next)=>{
    Product.find()
    .then((products)=>{ 
     return res.status(200).json(products);
    })
    .catch((err)=>{
      return res.status(400).json(err)
    })
    },
/**
 * accéder aux détails d'un produit
 */
detailProduct:(req, res, next)=>{
    id = req.params.id
    Product.findOne({_id: id})
    .then((product)=>{ 
       return res.status(200).json(product);
      })
      .catch((err)=>{
        return res.status(400).json(err)
      })
},

/**
 * enregistrer un produit
 */
createProduct:(req, res, next)=>{

    const newProduct = new Product({
        ...req.body,
        image: `${req.protocol}://${req.get('host')}/images/products/${req.file.filename}`,
        createdAt: Date.now()
    })
    newProduct.save()
    .then((newProduct)=>{
       return res.status(201).json({message:'produit créé'})
    }).catch((err)=>{
        return res.status(400).json(err.message)})
},
/**
 * modifier un produit
 */
updateProduct:(req, res, next)=>{
    const id = req.params.id;
    Product.findOne({_id: id},(err, product)=>{
        if(err){
            return res.status(400).json(err);
        }

        if(req.file){
            const filename = product.image.split('/products/')[1]; //pr reccup le nom du fichier img a supprimer
            fs.unlink(`public/images/products/${filename}`, ()=>{
                console.log('fichier supprimé: '+filename )
            })
        }

        product.title = req.body.title ? req.body.title : product.title;
        product.description = req.body.description ? req.body.description : product.description;
        product.price = req.body.price ? req.body.price : product.price;
        product.stock = req.body.stock ? req.body.stock : product.stock;
        product.image = req.file? `${req.protocol}://${req.get('host')}/images/products/${req.file.filename}` : product.image;

        product.save(err, product)
        .then((product)=>{
            return res.status(200).json({message:'produit modifié'})})
        .catch((err)=>{
            return res.status(400).json(err)})
    } )
    
},

/**
 * supprimer un produit
 */
 deleteProduct:(req, res, next)=>{
    const id = req.params.id;
    
    Product.deleteOne({_id: id})
    .then((product)=>{
        const filename = product.image.split('/products/')[1]; //pr reccup le nom du fichier img a supprimer
            fs.unlink(`public/images/products/${filename}`, ()=>{
                console.log('fichier supprimé: '+filename )
            })
        return res.status(200).json({message: 'produit supprimé'})})
    .catch((err)=>{
        return res.status(400).json(err)})
 }
}