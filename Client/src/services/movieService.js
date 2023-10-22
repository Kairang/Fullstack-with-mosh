import movieApi from "../api/movieApi";

export function getMovies() {
    return movieApi.getAll();
};

export function getMovieById(id) {
    return movieApi.getById(id);
};

export function saveMovie(movie) {
    if (movie?._id) {
        const body = { ...movie };
        delete body._id;

        return movieApi.updateMovie(body, movie._id);
    }

    return movieApi.createMovie(movie);
};

export function deleteMovie(id) {
    return movieApi.deleteMovie(id);
};
