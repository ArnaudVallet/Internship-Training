const multer = require('multer');
const ErrorResponse = require('../utils/errorResponse');

// Storages locations
const FormationImageStorage = multer.diskStorage({
  // Destination to store image     
  destination: '../images/formations', 
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' + Date.now() 
        //+ path.extname(file.originalname)
        )
      // file.fieldname is name of the field (image)
      // path.extname get the uploaded file extension
  }
});

// Saving Middlewares
const FormationImageUpload = multer({
  storage: FormationImageStorage,
  limits: {
    fileSize: 1000000 // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) { 
       // upload only png and jpg format
       return cb(new ErrorResponse('Please upload a Image'))
     }
   cb(undefined, true)
}
});

module.exports = {
  FormationImageUpload
}