const express = require('express');
const router = express.Router();

const {
  addFormationToUser,
  deleteFormationFromUser,
  getAllFormationsFromUser
} = require('../controllers/UserController');

// Below is the same as router.post("/register", (req, res, [next]) =>{})
router.route("/addformation").post(addFormationToUser);


module.exports = router;