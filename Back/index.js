const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')

// Récupération des variables d'environnement 
const { APP_PORT, DB_URI } = process.env

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
app.use(cors());

const mongoose = require("mongoose");
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Basic Home route '/' returning Hello
app.get('/', (req, res) =>{
    res.send('Hello from back api !');
});

// Import api routers
var products = require('./routes/ProductsRouter')

// Use api routers
app.use('/products', products)

// Application running and listening
app.listen(APP_PORT, () =>{
    console.log(`Training app listening at http://localhost:${APP_PORT}`);
});
