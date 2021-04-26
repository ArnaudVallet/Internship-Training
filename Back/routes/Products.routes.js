const { Router } = require('express');
var express = require('express');
var router = express.Router();
const ProductController = require('./../controllers/ProductController');

// function test(req, res, next){
//   console.log('La fonction test est appelée');
//   next()
// }

// Ce Middleware se déclenche à chaque fois que je vais sur une route en /products
router.use(function timeLog (req, res, next) {
  console.log('Product route called at time: ', Date.now())
  next()
})

// Test de .all applied to router
  // Apply to all routes from this router
    // router.all('*', test)
  // Apply to all starting by '/api'
    // router.all('/api/*')

// Define the home page route
router.get('/', async function (req, res) {
  // Récupération du prix en query param de l'URI http://localhost:1234/products?price=10
  let price = req.query.price;
  if(price){
    console.log(`Query param of price is : ${price}`);
    res.send(`Query param of price is : ${price}`);
    return;
  }
  try {
      const essai = await ProductController.findByPrice(11);
      res.send(essai);
  } catch (error) {
      console.log(error);
  }
    
})
// define the about route
router.get('/all', async function (req, res) {
  const allProducts = await ProductController.getAllProducts();
  res.json(allProducts);
})
// Populate DB with 3 fake products
router.get('/populate', async function (req, res) {
  const createdProducts = await ProductController.create3FakeProducts();
  console.log(createdProducts);
  res.json(createdProducts);
})

// Testing aggregation
router.route('/aggregation').get(ProductController.myAggregation);


module.exports = router
