const { Schema, model } = require('mongoose');

const rentalSchema = new Schema({
    customer: {
        type: new Schema({
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
        }),
        required: true,
    },
    movie: {
        type: new Schema({
            title: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 255,
            },
            dailyRentalRate: {
                type: Number,
                required: true,
                min: 0,
                max: 255
            }
        }),
        required: true,
    },
    dateOut: {
        type: Date,
        required: true,
        default: Date.now,
    },
    dateReturned: {
        type: Date,
    },
    rentalFee: {
        type: Number,
        min: 0,
    }
});

module.exports = model('Rental', rentalSchema);
