require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 50,
        trim: true,
    },
    email: {
        type: String,
        minlength: 10,
        maxlength: 255,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 1025,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

userSchema.methods.generateAuthToken = function () {
    return jwt.sign(
        { email: this.email, _id: this._id, name: this.name, isAdmin: this.isAdmin },
        process.env.ACCESS_TOKEN_SECRET
    );
};

module.exports = model('User', userSchema);
