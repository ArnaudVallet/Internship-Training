const express = require('express');
const router = express.Router();

const { create, getAllFormations } = require('../controllers/FormationController');

router.route('/').get(getAllFormations);
router.route("/create").post(create);

module.exports = router;