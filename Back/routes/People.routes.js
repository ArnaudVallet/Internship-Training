const express = require('express');
const router = express.Router();

const { createPeopleDoc, getWithMixedTypeMessage, getWithAggregate, createPeopleDocByPieces } = require('../controllers/PeopleController');

router.route("/create").get(createPeopleDoc);

router.route("/getwithmixedtypemessage").get(getWithMixedTypeMessage);

router.route("/getWithAggregate").get(getWithAggregate);

router.route("/createPeopleDocByPieces").post(createPeopleDocByPieces);

module.exports = router;