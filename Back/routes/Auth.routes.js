const express = require('express');
const router = express.Router();

// Controller Functions
const { register, login, forgotpassword, resetpassword } = require('../controllers/AuthController');

// Below is the same as router.post("/register", (req, res, [next]) =>{})
router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotpassword);

router.route("/resetpassword/:resetToken").put(resetpassword);

module.exports = router;