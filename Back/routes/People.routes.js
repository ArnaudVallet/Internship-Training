const express = require('express');
const router = express.Router();

const { createPeopleDoc, getWithMixedTypeMessage } = require('../controllers/PeopleController');

router.route("/create").get(createPeopleDoc);

router.route("/getwithmixedtypemessage").get(getWithMixedTypeMessage);

// router.route("/forgotpassword").post(forgotpassword);

// router.route("/resetpassword/:resetToken").put(resetpassword);

module.exports = router;