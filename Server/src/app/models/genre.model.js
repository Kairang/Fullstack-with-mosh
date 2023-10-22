const { Schema, model } = require('mongoose');

const genreSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 255,
        trim: true
    }
});

const Genre = model('Genre', genreSchema);

module.exports = { genreSchema, Genre };
