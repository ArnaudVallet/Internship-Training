const ErrorResponse = require('../utils/errorResponse');

exports.adminCheck = async(req, res, next) => {
  const user = req.user;

  if(!user.isAdmin){
    return next(new ErrorResponse("Vous n'êtes pas autorisé à accéder à cette route.", 401))
  }

  next();
};
