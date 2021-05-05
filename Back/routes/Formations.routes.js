const express = require('express');
const router = express.Router();

// Middlewares
const { protect } = require('../middlewares/authMiddleware');
const { adminCheck } = require('../middlewares/adminMiddleware');

// Controller Functions
const { 
  create,
  createWithBigObject,
  getAllFormationsWithPopulate,
  getAllFormationsWithAggregate,
  getPublishedFormations,
  deleteFormation,
  setPublished
} = require('../controllers/FormationController');

// If we want a general middleware
// router.use( <MIDDLEWARE> )

// CREATE
router.route('/create').post(create);
router.route('/createwithbigobject').post(createWithBigObject);

// READ
router.route('/withpopulate').get(getAllFormationsWithPopulate);
router.route('/withaggregate').get(getAllFormationsWithAggregate);
router.route('/published').get(getPublishedFormations);

// UPDATE
router.route('/setpublished/').patch(setPublished);

// DELETE
router.route('/delete/:id').delete(deleteFormation)

module.exports = router;