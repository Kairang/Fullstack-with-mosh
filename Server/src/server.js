const express = require('express');
const route = require('./routes');
const data = require('./config/database');
const cors = require('cors');
const appListent = require('debug')('app:listen');
require('dotenv').config();
const config = require('config');

const app = express();
const PORT = 8000;

// Connect to Database
data.connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true, }))
app.use(cors());

// Route middle
route(app);

app.listen(PORT, () => { appListent(`Listening on port ${PORT}`) });
