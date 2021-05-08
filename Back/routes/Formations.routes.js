const express = require('express');
const router = express.Router();

// Middlewares
const { protect } = require('../middlewares/authMiddleware');
const { adminCheck } = require('../middlewares/adminMiddleware');
const { FormationImageUpload } = require('./../middlewares/multer');

// Controller Functions
const { 
  create,
  createWithBigObject,
  getAllFormationsWithPopulate,
  getAllFormationsWithAggregate,
  getPublishedFormations,
  getOneById,
  getOneByIdWithPopulate,
  deleteFormation,
  setPublished,
  uploadImage,
  addOneModule
} = require('../controllers/FormationController');

// If we want a general middleware
// router.use( <MIDDLEWARE> )

// CREATE
router.route('/uploadimage').post(FormationImageUpload.single('file'), uploadImage);
router.route('/create').post(FormationImageUpload.single('file'), create);
router.route('/createwithbigobject').post(createWithBigObject);

// READ
router.route('/getonebyid/:id').get(getOneById);
router.route('/getonebyidwithpopulate/:id').get(getOneByIdWithPopulate);
router.route('/withpopulate').get(getAllFormationsWithPopulate);
router.route('/withaggregate').get(getAllFormationsWithAggregate);
router.route('/published').get(getPublishedFormations);

// UPDATE
router.route('/setpublished/').patch(setPublished);
router.route('/:formation_id/addonemodule/:module_id').patch(addOneModule);

// DELETE
router.route('/delete/:id').delete(deleteFormation)

module.exports = router;