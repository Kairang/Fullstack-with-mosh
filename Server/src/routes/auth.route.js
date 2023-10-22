require('dotenv').config();
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../app/models/user.model');

router.post('/', async function (req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('Invalid email.');

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) throw new Error('Invalid password.');

        const accessToken = user.generateAuthToken();

        res.status(200).json({ msg: 'Login Successfully!!!', token: accessToken });
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports = router;

