const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const ErrorResponse = require('../utils/errorResponse');

// This Middleware checks for a valid JWT token inside the req.headers.authorization
// The token is passed as a Bearer <token>
// The Middleware adds the fetched user from the DB to the req.user created property
// It makes the user object available to the next() Middlewares which could work on it
exports.protect = async(req, res, next) =>{
    let token;
    // Get the token from headers as a Bearer <token>
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        // Example : Bearer <token>
        token = req.headers.authorization.split(' ')[1]
    }
    // No token ? Throw custom ErrorResponse
    if(!token){
        return next(new ErrorResponse("Vous n'êtes pas autorisé à accéder à cette route.", 401));
    }
    // Else, try to decode the token with the ENV secret
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Try to fetch the user in the DB with his ID we get in the decoded JWT object

        // CHECK CACHE ICI !!!

        const user = await User.findById(decoded.id);
        // No user ? Throw custom ErrorResponse
        if(!user){
            return next(new ErrorResponse("Aucun utilisateur trouvé avec cet ID", 404));
        }
        // Else, we add the fetched user object to the req property
        req.user = user;
        next();

    } catch (error) {
        //console.log('\x1b[36m%s\x1b[0m', 'Error name : ', error.name);
        return next(error);
    }
};
