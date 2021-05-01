const express = require('express');
const router = express.Router();

const { create, getAllFormations, createWithBigObject } = require('../controllers/FormationController');

router.route('/').get(getAllFormations);
router.route("/create").post(create);
router.route('/createwithbigobject').post(createWithBigObject);

module.exports = router;