const multer = require('multer');
const path = require('path');
const fs = require('fs');
const ErrorResponse = require('../utils/errorResponse');
const dateConvert = require('../utils/dateConvert');

// STORAGE LOCATIONS

// Upload d'images pour formations
const FormationImageStorage = multer.diskStorage({
  // Destination to store image
  destination: function(req, file, cb) {
    //define the dir to save
    const dir = `./uploads/images/formations`;
    // check if it exists
    if(!fs.existsSync(dir)) {
      fs.mkdir(dir, function(err) {
        if (err) {
          return cb(err)
        }
      });
    }
    cb(null, dir);
  },  
  filename: (req, file, cb) => {
    console.log('FILE CONTIENT : ', file);
    cb(null, file.fieldname + '_' + Date.now() 
        + path.extname(file.originalname.toLowerCase())
        )
      // file.fieldname is name of the field (image)
      // path.extname get the uploaded file extension
  }
});

// Upload de fichiers pour admins
const AdminFileStorage = multer.diskStorage({
  // Destination to store files
  destination: async function(req, file, cb) {
    // Get the extension of the file without the '.'
    const extension = path.extname(file.originalname.toLowerCase()).replace('.', '');
    // directory to check if exists
    const dir = `./uploads/admin/${extension}`;
    // check if directory exists
    if(!fs.existsSync(dir)) {
      fs.mkdir(`./uploads/admin/${extension}`, function(err) {
        if (err) {
          return cb(err)
        }
      });
    }
    cb(null, `./uploads/admin/${extension}`)
  },  
  filename: (req, file, cb) => {
    cb(null, file.originalname.split('.').slice(0, -1).join('.')
        + '_' + dateConvert(Date.now()) 
        + path.extname(file.originalname.toLowerCase())
        )
      // file.fieldname is name of the field (image)
      // path.extname get the uploaded file extension
  }
});

// SAVING MIDDLEWARES

// Formation Image Saving MiddleWare
const FormationImageUpload = multer({
  storage: FormationImageStorage,
  limits: {
    fileSize: 10000000 // 1000000 Bytes = 1 MB
  },
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) { 
       // upload only png and jpg format
       return cb(new ErrorResponse('Veuillez télécharger une image valide.', 400))
     }
    cb(undefined, true)
  }
});

// Admin File Saving MiddleWare
const AdminFileUpload = multer({
  storage: AdminFileStorage,
  limits: {
    fileSize: 10000000 // 1000000 Bytes = 1 MB
  },
  // fileFilter: (req, file, cb) => {
  //   if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) { 
  //      // upload only png and jpg format
  //      return cb(new ErrorResponse('Veuillez télécharger une image valide.', 400))
  //    }
  //   cb(undefined, true)
  // }
});

module.exports = {
  FormationImageUpload,
  AdminFileUpload
}