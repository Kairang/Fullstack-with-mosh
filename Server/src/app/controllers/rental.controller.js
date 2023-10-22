const Rental = require('../models/rental.model');
const Customer = require('../models/customer.model');
const Movie = require('../models/movie.model');

const rentalsController = {
    // CREATE RENTAL
    createRental: async function (req, res, next) {
        try {
            const customer = await Customer.findById(req.body.customerId);
            if (!customer) throw new Error('Customer ID is not exist');

            const movie = await Movie.findById(req.body.movieId);
            if (!movie) throw new Error('Movie ID is not exist');
            if (movie.numberInStock === 0) throw new Error('Movie out of stock');

            let rental = new Rental({
                customer: {
                    _id: customer._id,
                    name: customer.name,
                    phone: customer.phone
                },
                movie: {
                    _id: movie._id,
                    title: movie.title,
                    dailyRentalRate: movie.dailyRentalRate
                }
            });
            rental = await rental.save();

            movie.numberInStock--;
            await movie.save();

            res.status(201).json(rental);
        } catch (error) {
            next(error);
        }
    },

    // GET ALL
    getALl: async function (req, res, next) {
        try {
            const rental = await Rental.find().sort('-dateOut');
            res.status(201).json(rental);
        } catch (error) {
            next(error);
        }
    }
};

module.exports = rentalsController;
