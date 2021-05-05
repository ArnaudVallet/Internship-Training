const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message

    // For insight purpose on what contains the err thrown
    // console.log('\x1b[36m%s\x1b[0m' ,'My insight : ', Object.getOwnPropertyNames(err)); // You can then build your own if() handlers below

    // 11 000 means 'duplicate error key' in Mongoose
    if(err.code === 11000){
        const message = 'Duplicate Field Value Enter';
        error = new ErrorResponse(message, 400);
    }

    // Mongoose problem with a specific schema validation
    if(err.name === "ValidationError"){
        const message = Object.values(err.errors).map((val) => val.message);
        error = new ErrorResponse(message, 400);
    }

    // Handling Bearer Token errors
    if(err.name === 'TokenExpiredError'){
        const message = 'Le token JWT a expiré.';
        error = new ErrorResponse(message, 401);
    }
    if(err.name === 'JsonWebTokenError'){
        const message = 'La signature du token JWT est invalide.';
        error = new ErrorResponse(message, 401);
    }

    // Handling Mongoose bad requests
    if(err.kind === 'ObjectId'){
      const message = 'Aucune formation n\'a pu être supprimée.';
      error = new ErrorResponse(message, 400);
    }

    console.log(err);

    // Sending the resulting handled error
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error"
    });

};

module.exports = errorHandler;