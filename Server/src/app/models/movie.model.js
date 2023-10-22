const { Schema, model } = require('mongoose');
const { genreSchema } = require('./genre.model');

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    genre: { type: genreSchema, required: true },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    }
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = model('Movie', movieSchema);
