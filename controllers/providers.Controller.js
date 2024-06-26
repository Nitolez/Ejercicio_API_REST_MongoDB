const Provider = require('../models/provider.model');
const { validationResult } = require("express-validator");

// Obtener todos los providers
const getAllProviders = async (req, res) => {
  try {
    const providers = await Provider.find();
    res.status(200).json(providers)
    } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo provider
const createProvider = async (req, res, next) => {
//   const { company_name, CIF, address, url_web } = req.body;

//   try {
//     const newProvider = new Provider({ company_name, CIF, address, url_web });
//     await newProvider.save();
//     res.status(201).json(newProvider);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
try {
  const errors = validationResult(req);

  // if there is error then return Error
  if (!errors.isEmpty()) {
      return res.status(400).json({
          success: false,
          errors: errors.array(),
      });
  }

  // do some operation - like save data to DB (eg mongodb)
  // dummy code
  // User.create(req.body);

  res.json({ success: true });
} catch (err) {
  next(err);
}
};

// Actualizar un provider
const updateProvider = async (req, res) => {
    const { id } = req.params;
    const { company_name, CIF, address, url_web } = req.body;
  
    try {
      const updatedProvider = await Provider.findByIdAndUpdate(
        id,
        { company_name, CIF, address, url_web },
        { new: true }
      );
      res.json(updatedProvider);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Eliminar un provider
  const deleteProvider = async (req, res) => {
    const { id } = req.params;
  
    try {
      await Provider.findByIdAndDelete(id);
      res.json({ message: 'Provider eliminado' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    getAllProviders,
    createProvider,
    updateProvider,
    deleteProvider
  };