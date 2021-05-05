const express = require('express');
const router = express.Router();

// Middlewares
const { protect } = require('../middlewares/authMiddleware');
const { adminCheck } = require('../middlewares/adminMiddleware');

// Controller Functions
const {
  addFormationToUser,
  deleteFormationFromUser,
  getAllFormationsFromUser
} = require('../controllers/UserController');

// Below is the same as router.post("/register", (req, res, [next]) =>{})
router.route("/addformation").post(addFormationToUser);


module.exports = router;