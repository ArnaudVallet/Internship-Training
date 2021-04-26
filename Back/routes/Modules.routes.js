const express = require('express');
const router = express.Router();
const { getAllModules, createModule } = require('../controllers/ModuleController');

router.route('/').get(getAllModules);
router.route('/create').post(createModule);

module.exports = router;