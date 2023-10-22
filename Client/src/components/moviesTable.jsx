import React from 'react';
import { Link } from 'react-router-dom';
import Like from './common/like';
import Table from './common/table';
import auth from '../services/authServer';

export default class MoviesTable extends React.Component {
    columns = [
        {
            path: 'title',
            label: 'Title',
            children: (movie) => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>,
        },
        { path: 'genre.name', label: 'Genres' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        {
            key: 'like',
            children: (movie) => (
                <Like liked={movie.liked} onLikeToggle={() => this.props.onLike(movie)} />
            ),
        },
    ];

    deleteColumn = {
        key: 'delete',
        children: (movie) => (
            <button
                type="button"
                className="btn btn-danger ml-4"
                onClick={() => this.props.onDelete(movie)}
            >
                Delete
            </button>
        ),
    };

    constructor() {
        super();
        const user = auth.getCurrentUser();
        if (user && user?.isAdmin) {
            this.columns.push(this.deleteColumn);
        }
    }

    render() {
        const { movies, onSort, sortColumn } = this.props;

        return (
            <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort} />
        );
    }
}
