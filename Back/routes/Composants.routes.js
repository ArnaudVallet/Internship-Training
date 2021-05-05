const express = require('express');
const router = express.Router();
const { testAggregation } = require('../controllers/ComposantController');

router.route('/aggregation').get(testAggregation);

module.exports = router;
