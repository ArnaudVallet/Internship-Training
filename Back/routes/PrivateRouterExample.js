const express = require('express');
const router = express.Router();
const { getPrivateData } = require('../controllers/PrivateControllerExample');
const { protect } = require('../middlewares/authMiddleware');

router.route('/').get(protect, getPrivateData);

module.exports = router;
