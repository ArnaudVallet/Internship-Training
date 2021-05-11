exports.uploadOneFile = async(req, res, next) => {
  const file = req.file;
  file.path = file.path.replace(/\\/g, "/");
  res.status(200).json({
    success: true,
    message: `Le fichier ${file.originalname} a bien été téléchargé.`,
    filename: file.filename,
    url: file.path
  });
};

exports.uploadManyFiles = async(req, res, next) => {
  const files = req.files;
  console.log(files);
  // file.path = file.path.replace(/\\/g, "/");
  res.status(200).json({
    success: true,
    message: `Les fichier ont bien été téléchargés.`,
    // filename: file.filename,
    // url: file.path
  });
};


