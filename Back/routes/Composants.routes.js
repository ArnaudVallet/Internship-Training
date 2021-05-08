const express = require('express');
const router = express.Router();

// Middlewares
const { protect } = require('../middlewares/authMiddleware');
const { adminCheck } = require('../middlewares/adminMiddleware');

// Controller Functions
const {
  testAggregation,
  getAllComposants,
  createComposant,
  createModuleComposant
} = require('../controllers/ComposantController');

// CREATE
router.route('/create').post(createComposant);
router.route('/createformodule/:id').post(createModuleComposant);

// READ
router.route('/aggregation').get(testAggregation);
router.route('/').get(getAllComposants);

// UPDATE

// DELETE


module.exports = router;
