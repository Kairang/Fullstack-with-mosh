const _ = require('lodash');
const auth = require('../app/middleware/auth');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const User = require('../app/models/user.model');

router.post('/', async function (req, res, next) {
    const { email } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) throw new Error('Email already registered!');

        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);

        user = new User({
            ...req.body,
            password,
        });
        await user.save();

        const accessToken = user.generateAuthToken();
        res.header('x-auth-token', accessToken)
            .header('Access-Control-Expose-Headers', 'x-auth-token')
            .status(200)
            .json(_.pick(user, ['_id', 'name', 'email']));
    } catch (error) {
        res.status(400).json(error.message);
        next(error);
    }
});

router.get('/profile', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.status(200).json(user);
});

module.exports = router;
