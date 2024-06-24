const express = require('express')
const mongoose = require('mongoose');
const cowsay = require('cowsay')
const app = express()
const port = process.env.port


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


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://anto:8ubwIkBFoKMVtVwg@clusterprueba.4kuzch9.mongodb.net/ClusterPrueba?retryWrites=true&w=majority&appName=ClusterPrueba"
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);