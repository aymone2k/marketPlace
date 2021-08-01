var express = require('express');
const multer = require('../middleware/multer.config');
const productController = require('../controllers/product.controller');
const productValidator = require('../middleware/validators/product.validator');
var router = express.Router();



/**
 * retourne l'ensemble des produits vendus sur le site
 */ 
router.get('/products', productController.allProducts)
/**
 * accéder aux détails d'un produit
 */
router.get('/product/:id', productController.detailProduct )
/**
 * enregistrer un produit
 */
router.post('/product', multer, productValidator, productController.createProduct)
/**
 * modifier un produit
 */
router.put('/product/:id',multer, productValidator, productController.updateProduct )
/**
 * supprimer un produit
 */
router.delete('/product/:id', productController.deleteProduct )



module.exports = router;
 