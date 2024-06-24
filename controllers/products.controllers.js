const Product = require('../models/products.model');
const { ObjectId } = require('mongodb');
const { validationResult } = require("express-validator");


// Obtener todos los productos
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('provider');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo producto
const createProduct = async (req, res, next) => {
//   const { id, title, price, description } = req.body;
//   const provider = new ObjectId(req.body.provider);

//   try {
//     const newProduct = new Product({ id, title, price, description, provider });
//     await newProduct.save();
//     res.status(201).json(newProduct);
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


// Actualizar un producto
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, price, description, provider } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { title, price, description, provider },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
};