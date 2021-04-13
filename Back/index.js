const express = require('express');
const app = express();
const port = 1234;
require('dotenv').config();
const cors = require('cors')
const config = require("./config/key");

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors());

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/skillzy",
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Basic Home route '/'
app.get('/', (req, res) =>{
    res.send({
      message: 'hello from back api'
    });
});

// Import api routes
var products = require('./routes/ProductsRouter')

// Use api routes
app.use('/products', products)

// Application running and listening
app.listen(port, () =>{
    console.log(`Training app listening at http://localhost:${port}`);
});
