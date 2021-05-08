const express = require('express');
const router = express.Router();

// Middlewares
const { protect } = require('../middlewares/authMiddleware');
const { adminCheck } = require('../middlewares/adminMiddleware');

// Controller Functions
const {
  getAllModules,
  getOneById,
  createModule,
  createFormationModule,
  addOneExistingComposant
} = require('../controllers/ModuleController');

// CREATE
router.route('/create').post(createModule);
router.route('/createforformation/:id').post(createFormationModule);

// READ
router.route('/').get(getAllModules);
router.route('/getonebyid/:id').get(getOneById);

// UPDATE
router.route('/:module_id/addonecomposant/:composant_id').patch(addOneExistingComposant);

// DELETE


module.exports = router;