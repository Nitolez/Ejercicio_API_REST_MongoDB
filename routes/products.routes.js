const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controllers');
const {
  productsDataValidateChainMethod
  } = require("../validations/products.validation");
  
router.get('/products', productsController.getAllProducts);
router.post('/products', productsDataValidateChainMethod, productsController.createProduct);
router.put('/products/:id', productsController.updateProduct);
router.delete('/products/:id', productsController.deleteProduct);


module.exports = router;