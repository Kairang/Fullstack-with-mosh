import Joi from 'joi-browser';
import { getGenres } from '../services/genreService';
import { getMovieById, saveMovie } from '../services/movieService';
import Form from './common/form';

class MovieForm extends Form {
    state = {
        data: {
            title: '',
            genreId: '',
            numberInStock: '',
            dailyRentalRate: '',
        },
        genres: [],
        errors: {},
    };
    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label('Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().min(0).max(100).required().label('Number In Stocke'),
        dailyRentalRate: Joi.number().min(0).max(10).required().label('Daily Rental Rate'),
    };

    doSubmit = async () => {
        try {
            const movie = this.state.data;
            await saveMovie(movie);

            this.props.history.push('/movies');
        } catch (ex) {}
    };

    async populateGenre() {
        const { data: genres } = await getGenres();
        this.setState({ genres });
    }

    async populateMovie() {
        try {
            const id = this.props.match.params.id;
            if (id === 'new') return;

            const { data: movie } = await getMovieById(id);
            const data = {
                _id: movie._id,
                title: movie.title,
                genreId: movie.genre._id,
                numberInStock: movie.numberInStock,
                dailyRentalRate: movie.dailyRentalRate,
            };
            this.setState({ data });
        } catch (ex) {
            return this.props.history.replace('/not-found');
        }
    }

    async componentDidMount() {
        await this.populateGenre();
        await this.populateMovie();
    }

    render() {
        const { genres } = this.state;

        return (
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderFormInput('title', 'Title', 'text', true)}
                    {this.renderFormSelect('genreId', 'Genre', genres)}
                    {this.renderFormInput('numberInStock', 'Number In Stock')}
                    {this.renderFormInput('dailyRentalRate', 'Daily Rental Rate')}
                    {this.renderButton('Save')}
                </form>
            </div>
        );
    }
}

export default MovieForm;
