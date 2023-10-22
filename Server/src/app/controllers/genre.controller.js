/**
 * 
 */

const { Genre } = require('../models/genre.model');

const genresController = {
    // CREATE NEW GENRE 
    createGenre: async (req, res, next) => {
        const newGenre = new Genre(req.body);
        const genre = await newGenre.save();

        res.status(201).json(genre);
    },

    // GET ALL GENRES
    getAll: async (req, res, next) => {
        const genres = await Genre.find().select('-__v');
        res.status(200).json(genres);
    },

    // GET GENRE BY ID
    getById: async (req, res, next) => {
        const genre = await Genre.findById(req.params.id);
        if (!genre) {
            throw new Error('Id is not exist!!!');
        }

        res.status(200).json(genre);
    },

    // UPDATE GENRE BY ID
    updateGenre: async (req, res, next) => {
        const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(genre);
    },

    // DELETE GENRE BY ID
    deleteGenre: async (req, res, next) => {
        const genre = await Genre.findByIdAndDelete(req.params.id);
        res.status(200).json(genre);
    },
}

module.exports = genresController;
