const express = require('express');
const router = express.Router();

// Middlewares
const { protect } = require('../middlewares/authMiddleware');
const { adminCheck } = require('../middlewares/adminMiddleware');
const { AdminFileUpload } = require('./../middlewares/multer');

// Controller Functions
const { 
  uploadOneFile,
  uploadManyFiles
} = require('../controllers/AdminUploadController');

router.route('/single').post(/*protect, adminCheck, */AdminFileUpload.single('file'), uploadOneFile);
router.route('/many').post(/*protect, adminCheck, */AdminFileUpload.array('files', 10), uploadManyFiles);

module.exports = router;
