const express = require('express');
const authRouter = require('./routes/auth.route');
const data = require('./config/database');
const authListent = require('debug')('auth:listen');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5555;

// Connect to Database
data.connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/api/v1/auth', authRouter);

app.listen(PORT, () => { authListent(`Listening on port ${PORT}`) });