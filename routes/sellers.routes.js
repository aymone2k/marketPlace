var express = require('express');
var router = express.Router();
const sellerController = require('../controllers/seller.controller');

/**
 * Affiche liste des vendeurs
 */
 router.get('/', sellerController.getAllSeller )

/**
 * enregistrer un cpte vendeur
 */
router.post('/signup', sellerController.signUpSeller )

/**
 * Login vendeur
 */
router.post('/login', sellerController.loginSeller)


/**
 * modifier un cpte vendeur
 */
 router.put('/id', sellerController.updateProfileSeller )

/**
 * supprimer un compte vendeur
 */
 router.delete('/id', sellerController.deleteProfileSeller )

/**
 * forgot Password seller
 */
//router.post('/forgotPassword', sellerController.forgotPasswordSeller )

/**
 * reset Password seller
 */
// router.post('/resetPassword', sellerController.resetPasswordSeller )

module.exports = router;
 