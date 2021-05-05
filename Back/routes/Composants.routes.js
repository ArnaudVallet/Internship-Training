const express = require('express');
const router = express.Router();

// Middlewares
const { protect } = require('../middlewares/authMiddleware');
const { adminCheck } = require('../middlewares/adminMiddleware');

// Controller Functions
const { testAggregation } = require('../controllers/ComposantController');

router.route('/aggregation').get(testAggregation);

module.exports = router;
