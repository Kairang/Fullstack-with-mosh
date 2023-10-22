const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    phone: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 15,
    },
    isGold: { type: Boolean, default: false },
});

module.exports = mongoose.model('Customer', customerSchema);
