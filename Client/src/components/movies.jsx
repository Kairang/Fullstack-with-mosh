import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getGenres } from '../services/genreService';
import { deleteMovie, getMovies } from '../services/movieService';
import { paginate } from '../utils/paginate';
import GenresList from './common/genresList';
import Pagination from './common/pagination';
import SearchBox from './common/searchBox';
import MoviesTable from './moviesTable';

export default class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: { path: 'title', order: 'asc' },
        searchQuery: '',
        selectedGenre: null,
    };

    async componentDidMount() {
        const { data: allGenres } = await getGenres();
        const genres = [{ _id: '', name: 'All Genres' }, ...allGenres];

        const { data: movies } = await getMovies();
        this.setState({ movies, genres });
    }

    handleDeleteMovie = async (movie) => {
        const movies = this.state.movies.filter((el) => el._id !== movie._id);
        try {
            await deleteMovie(movie._id);
            this.setState({ movies });
        } catch (err) {}
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);

        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;

        this.setState({ movies });
    };

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };

    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre: genre, searchQuery: '', currentPage: 1 });
    };

    handleSort = (sortColumn) => {
        this.setState({ sortColumn });
    };

    handleSearch = (query) => {
        this.setState({ selectedGenre: null, searchQuery: query, currentPage: 1 });
    };

    render() {
        const {
            pageSize,
            currentPage,
            movies: allMovies,
            genres,
            selectedGenre,
            sortColumn,
            searchQuery,
        } = this.state;
        const { user } = this.props;

        // filter Movies
        let filteredMovies = allMovies;
        if (searchQuery)
            filteredMovies = allMovies.filter((movie) =>
                movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        else if (selectedGenre && selectedGenre._id)
            filteredMovies = allMovies.filter((movie) => movie.genre._id === selectedGenre._id);

        // Number of movies
        const count = filteredMovies.length;

        // sort Movies by column
        const sortedMovies = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order]);

        // pagination
        const movies = paginate(sortedMovies, currentPage, pageSize);

        // query movies with debounce
        const handleSearchWithDebounce = _.debounce(this.handleSearch, 500);

        if (allMovies.length === 0) return <h2>There are no movies in the database.</h2>;

        return (
            <div className="row">
                <div className="col-3">
                    <GenresList
                        items={genres}
                        selectedItem={selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    {user && (
                        <Link className="btn btn-primary mb-2" to="/movies/new">
                            New Movie
                        </Link>
                    )}
                    <h4 className="mb-4">Showwing {count} movies in the database.</h4>
                    <SearchBox onChange={handleSearchWithDebounce} />
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDeleteMovie}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}
