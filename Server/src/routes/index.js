/**
 * 
 */

const error = require('../app/middleware/errorHandle');
const movieRouter = require('./movie.route');
const customerRouter = require('./customer.route');
const genreRouter = require('./genre.route');
const rentalRouter = require('./rental.route');
const userRouter = require('./user.route');

function route(app) {
    app.use('/api/v1/movies', movieRouter);
    app.use('/api/v1/customers', customerRouter);
    app.use('/api/v1/genres', genreRouter);
    app.use('/api/v1/rentals', rentalRouter);
    app.use('/api/v1/users', userRouter);
    app.use(error)
}

module.exports = route;
