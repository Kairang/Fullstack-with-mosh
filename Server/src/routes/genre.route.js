/**
 * 
 */

const router = require('express').Router();
const genresController = require('../app/controllers/genre.controller');
const auth = require('../app/middleware/auth');
const asyncMiddleware = require('../app/middleware/async');

// GET ALL GENRES
router.get('/', genresController.getAll);

// GET GENRE BY ID
router.get('/:id', genresController.getById);

// CREATE NEW GENRE 
router.post('/', auth, asyncMiddleware(genresController.createGenre));

// UPDATE GENRE BY ID
router.put('/:id', auth, asyncMiddleware(genresController.updateGenre));

// DELETE GENRE BY ID
router.delete('/:id', auth, asyncMiddleware(genresController.deleteGenre));

module.exports = router;
