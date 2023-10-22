/**
 * 
 */

const router = require('express').Router();
const moviesController = require('../app/controllers/movie.controller');
const auth = require('../app/middleware/auth');
const admin = require('../app/middleware/admin');
const asyncMiddleware = require('../app/middleware/async');

// GET ALL MOVIES
router.get('/', moviesController.getAll);

// GET MOVIE BY ID
router.get('/:id', moviesController.getById);

// CREATE NEW MOVIE 
router.post('/', auth, asyncMiddleware(moviesController.createMovie));

// UPDATE MOVIE BY ID
router.put('/:id', auth, asyncMiddleware(moviesController.updateMovie));

// DELETE MOVIE BY ID
router.delete('/:id', [auth, admin], asyncMiddleware(moviesController.deleteMovie));

module.exports = router;
