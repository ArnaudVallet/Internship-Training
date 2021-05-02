const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

const { 
  create,
  createWithBigObject,
  getAllFormationsWithPopulate,
  getAllFormationsWithAggregate,
  deleteFormation
} = require('../controllers/FormationController');

// If we want a general middleware
// router.use( <MIDDLEWARE> )

// CREATE
router.route('/create').post(create);
router.route('/createwithbigobject').post(createWithBigObject);

// READ
router.route('/withpopulate').get(getAllFormationsWithPopulate);
router.route('/withaggregate').get(getAllFormationsWithAggregate);

// UPDATE

// DELETE
router.route('/delete/:id').delete(deleteFormation)

module.exports = router;