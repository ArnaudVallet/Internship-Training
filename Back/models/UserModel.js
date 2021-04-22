const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Veuillez saisir un nom d'utilisateur."]
    },
    email: {
        type: String,
        required: [true, "Veuillez saisir un email."],
        unique: true,
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Veuillez saisir un email valide."
        ]
    },
    password: {
        type: String,
        required: [true, "Veuillez saisir un mot de passe."],
        minlength: 6,
        select: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpire: {
        type: Date
    },
}, { timestamps: true });

UserSchema.pre('save', async function(next) {
    // If the password hasn't been modified, I want to call next() with trying to hash an alreade hashed password
    if(!this.isModified('password')){
        next();
    }
    // Else I want to hash it
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.matchPasswords = async function(password){
    return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedToken = function(){
    return jwt.sign(
        { id: this._id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE }
    );
};

UserSchema.methods.getResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

    return resetToken;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
