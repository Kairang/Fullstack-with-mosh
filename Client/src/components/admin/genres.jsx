import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteGenre, getGenres } from '../../services/genreService';

class Genre extends Component {
    state = {};

    async componentDidMount() {
        const { data: genres } = await getGenres();
        this.setState({ genres });
    }

    async handleDeleteGenre(item) {
        try {
            const genres = this.state.genres.filter((genre) => genre._id !== item._id);
            await deleteGenre(item._id);
            this.setState({ genres });
        } catch (err) {}
    }

    render() {
        const genres = this.state.genres;
        return (
            <div>
                <h1>Genres Managerment</h1>
                <Link className="btn btn-primary mb-2" to="/genres/new">
                    New Genre
                </Link>
                <ul>
                    {genres &&
                        genres.map((genre) => (
                            <div className="row mb-2" key={genre._id}>
                                <li style={{ minWidth: 100 }}>{genre.name}</li>
                                <button
                                    className="btn btn-danger btn-sm ml-4"
                                    onClick={() => this.handleDeleteGenre(genre)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                </ul>
            </div>
        );
    }
}

export default Genre;
