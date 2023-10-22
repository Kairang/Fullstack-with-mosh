const router = require('express').Router();
const rentalsController = require('../app/controllers/rental.controller');

// CREATE RENTAL
router.post('/', rentalsController.createRental);

// GET ALL
router.get('/', rentalsController.getALl);

module.exports = router;
