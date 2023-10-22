import genreApi from "../api/genreApi";

export function getGenres() {
    return genreApi.getAll();
}

export function deleteGenre(id) {
    return genreApi.deleteGenre(id);
}