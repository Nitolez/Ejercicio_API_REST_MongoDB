const express = require('express')
const mongoose = require('mongoose');
const cowsay = require('cowsay')
const app = express()
const port = 3000

// Middlewares
const error404 = require('./middlewares/error404');
const morgan = require('./middlewares/morgan');

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

// Rutas
//const productsApiRoutes = require("./routes/productsApi.routes")
const productsRoutes = require("./routes/products.routes")
const providerRoutes = require("./routes/providers.routes")
//const entriesApiRoutes = require("./routes/entriesApi.routes")

app.use(express.json()); 
// Rutas
//API
//app.use('/api/products',productsApiRoutes);
app.use('/api',providerRoutes);


//WEB
app.use('/api',productsRoutes);

app.listen(port, () => {
  console.log(
      cowsay.say({
          text: `Nos vamos a por tortilla. Funcionando en: http://localhost:${port}`,
          e: "oO",
          T: "U "
      }))
})

