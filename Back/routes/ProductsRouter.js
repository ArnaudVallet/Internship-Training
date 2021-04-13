var express = require('express');
var router = express.Router();
const ProductController = require('./../controllers/ProductController');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Product route called at time: ', Date.now())
  next()
})
// define the home page route
router.get('/', async function (req, res) {
  let price = req.query.price;
  if(price){
    console.log(price);
    res.send(`Query param of price is : ${price}`);
    return;
  }
  try {
      const essai = await ProductController.test();
      res.send('Products home page')
  } catch (error) {
      console.log(error);
  }
    
})
// define the about route
router.get('/all', async function (req, res) {
  const allProducts = await ProductController.test2();
  res.json(allProducts);
})
// Function to get Products by specific price
router.get('/')

module.exports = router