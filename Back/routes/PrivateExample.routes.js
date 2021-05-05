const express = require('express');
const router = express.Router();

// Middlewares
const { protect } = require('../middlewares/authMiddleware');
const { adminCheck } = require('../middlewares/adminMiddleware');

// Controller Functions
const { getPrivateData } = require('../controllers/PrivateControllerExample');

router.route('/').get(protect, adminCheck, getPrivateData);

module.exports = router;
