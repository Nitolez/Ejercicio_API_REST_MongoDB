const mongoose = require('mongoose');

const objectSchema = {
  company_name: { type: String, required: true },
  CIF: { type: String, required: true },
  address: { type: String, required: true },
  url_web: { type: String }
}

// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);
// Crear el modelo
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;