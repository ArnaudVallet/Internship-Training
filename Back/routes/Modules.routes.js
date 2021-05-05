const express = require('express');
const router = express.Router();

// Middlewares
const { protect } = require('../middlewares/authMiddleware');
const { adminCheck } = require('../middlewares/adminMiddleware');

// Controller Functions
const { getAllModules, createModule } = require('../controllers/ModuleController');

router.route('/').get(getAllModules);
router.route('/create').post(createModule);

module.exports = router;