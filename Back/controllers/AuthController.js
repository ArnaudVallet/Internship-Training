const User = require('../models/UserModel');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
// Custom Error class wich takes (message, statusCode) as parameters.
const ErrorResponse = require('../utils/errorResponse');

// DANS LOGIN ET REGISTER METTRE TOKEN DANS LE CACHE
// CHERCHER SI UTILISATEUR A PLUS DE 3 TOKENS
// 

exports.register = async(req, res, next) => {
    // Get username, email and password from the body
    const { username, email, password } = req.body;
    try {
        // We then try to create the user in the DB
        // The email must be unique : it's checked by our Schema
        // The password needs to be hashed : it's handled by our pre('save') Schema middleware
        const user = await User.create({
            username, email, password
        });

        // Status 201 = Created
        sendToken(user, 201, res);
    // If any Error occured during the process, we catch, and send it to next(). It basicly means we give the error to the next express middleware, our errorHandler()
    } catch (error) {
        next(error);
    };
};

exports.login = async(req, res, next) => {
    // Get email and password from the body
    const { email, password } = req.body;

    // If one missing, give the error to next() with our custom Error class
    if(!email || !password){
        return next(new ErrorResponse('Vous devez rentrer votre email et votre mot de passe.', 400)); // 400 = Bad Request
    }
    try {
        // Try to get the user from DB with by email and ask for password also (cause UserSchema don't give password if not asked)
        const user = await User.findOne({ email }).select("+password");
        // If no user found pass new custom Error to next();
        if(!user){
            return next(new ErrorResponse('Identifiants invalides.', 401)); // 401 = Unauthorized
        }
        // Call UserSchema method 'matchPasswords' on user instance to check credentials
        const isMatch = await user.matchPasswords(password);
        // If given password doesn't match pass next() a new custom Error
        if(!isMatch){
            return next(new ErrorResponse('Identifiants invalides', 401));
        };
        // EVERYTHING'S FINE ?! cool. We send back response to front.
        sendToken(user, 200, res);
    // If any Error occured during the process, we catch, and send it to next(). It basicly means we give the error to the next express middleware, our errorHandler()
    } catch (error) {
        next(error);
    };
};

exports.forgotpassword = async(req, res, next) => {
    // Get the email from the body
    const { email } = req.body;
    try {
        // Look for user by email
        const user = await User.findOne({email});
        // If no user, we onlu say we couldn't send the email
        if(!user){
            return next(new ErrorResponse("L'email n'a pas pu être enoyé", 404));
        }
        // We call User Method getResetPasswordToken() to generate and crypte a token
        // This crypted token is saved in DB for this user, but here WE ONLY GET THE UNCRYPTED TOKEN
        const resetToken = user.getResetPasswordToken();
        // We save the user to the DB with his crypted token and expiration date
        await user.save();
        // We define an URL for the front-end to send by email to the user
        const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
        // Core HTML message of the email
        const message = `
            <h1>Vous avez fait une demande de réinitialisation de mot de passe</h1>
            <p>Cliquez sur le lien ci-dessous pour le réinitialiser</p>
            <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `
        try {
            // We try to send the email
           await sendEmail({
               to: user.email,
               subject: 'Réinitialisation de mot de passe',
               text: message
           });
           // If it works...
           res.status(200).json({ success: true, data: "Email envoyé" })
        } catch (error) {
            // If any error occures while sending the email, we set back resetPasswordToken and resetPasswordExpire user properties to undefine and we save again
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
            await user.save();
            // We then throw a new custom ErrorResponse
            return next(new ErrorResponse("L'email n'a pas pu être envoyé", 500));
        }

    } catch (error) {
        // We end the big first try catch passing any unhandled errors to next() which will call our custom errorHandler middleware
        next(error);
    }
};

exports.resetpassword = async(req, res, next) => {
    // We crypt the uncrypted token from the request parameter in order to compare it to the one in DB
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.resetToken).digest('hex');
    try {
        // We try to find the user based on this crypted token
        // We also specify we only querry this user if the resetPasswordExpire date is greater than actual date
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() }
        })
        // If we don't find matching user we throw custom ErrorResponse
        if(!user){
            return next(new ErrorResponse("Token de réinitialisation invalide.", 400))
        }
        // Else, if we have an user, we change his password and reset his resetToken and Expire properties to undefined
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        // We finally save the user to the DB, the pre('save') middleware hashing the password for us
        await user.save();
        // Custom answer
        res.status(201).json({
            success: true,
            data: 'Mot de passe réinitialisé'
        })
    } catch (error) {
        // If any error we send it to next() and thus to our custom errorHandler
        next(error);
    }
};

// Simple refactoring function to keep it DRY (not like all my comments in this project...)
const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({
        success: true,
        token,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin
    });
};
