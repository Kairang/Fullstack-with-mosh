require('dotenv').config();
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
    if (!config.get('requiresAuth')) return next();

    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).send('Invalid access token.');
    }
};
