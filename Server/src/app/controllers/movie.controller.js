/**
 * 
 */

const Movie = require('../models/movie.model');
const { Genre } = require('../models/genre.model');

const moviesController = {
    // CREATE NEW MOVIE 
    createMovie: async (req, res, next) => {
        try {
            const genre = await Genre.findById(req.body.genreId);
            if (!genre) {
                throw new Error('GenreId is not exist!!!');
            }

            const newMovie = new Movie({
                title: req.body.title,
                genre: {
                    _id: genre._id,
                    name: genre.name
                },
                numberInStock: req.body.numberInStock,
                dailyRentalRate: req.body.dailyRentalRate
            });
            const movie = await newMovie.save();

            res.status(201).json(movie);
        }
        catch (err) {
            next(err)
        }
    },

    // GET ALL MOVIES
    getAll: async (req, res, next) => {
        try {
            const movies = await Movie.find();
            res.status(200).json(movies);
        }
        catch (err) { next(err) }
    },

    // GET MOVIE BY ID
    getById: async (req, res, next) => {
        try {
            const movie = await Movie.findById(req.params.id);
            res.status(200).json(movie);
        }
        catch (err) { next(err) }
    },

    // UPDATE MOVIE BY ID
    updateMovie: async (req, res, next) => {
        try {
            const genre = await Genre.findById(req.body.genreId);
            if (!genre) {
                throw new Error('GenreId is not exist!!!');
            }

            const movie = await Movie.findByIdAndUpdate(req.params.id,
                {
                    title: req.body.title,
                    genre: {
                        _id: genre._id,
                        name: genre.name
                    },
                    numberInStock: req.body.numberInStock,
                    dailyRentalRate: req.body.dailyRentalRate
                },
                { new: true });
            res.status(201).json(movie);
        }
        catch (err) {
            next(err)
        }
    },

    // DELETE MOVIE BY ID
    deleteMovie: async (req, res, next) => {
        try {
            const movie = await Movie.findByIdAndDelete(req.params.id);
            res.status(201).json(movie);
        }
        catch (err) { next(err) }
    },
}

module.exports = moviesController;
