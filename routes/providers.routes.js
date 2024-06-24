const express = require('express');
const router = express.Router();
const providersController = require('../controllers/providers.Controller');
const {
    providersDataValidateChainMethod
    } = require("../validations/providers.validation");
  
    
// Rutas para providers
router.get('/providers', providersController.getAllProviders);
router.post('/providers', providersDataValidateChainMethod, providersController.createProvider);
router.put('/providers/:id', providersController.updateProvider);
router.delete('/providers/:id', providersController.deleteProvider);

module.exports = router;