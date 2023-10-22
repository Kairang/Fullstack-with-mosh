const mongoose = require('mongoose');
const dbConect = require('debug')('db:connection');
require('dotenv').config();

const URL = process.env.MONGODB_URL_VIDLY_MOVIES;

function connectDB() {
    mongoose.connect(URL)
        .then(() => dbConect('Connected to MongoDB...'))
        .catch((err) => dbConect('Error connecting to MongoDB...', err));
}

module.exports = { connectDB };


