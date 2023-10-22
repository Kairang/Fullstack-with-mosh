import { useState } from "react";
import genreApi from "../api/genreApi";

export const useGenre = () => {
    const [genres, setGenres] = useState([]);
    const [genre, setGenre] = useState({});

    const getAllGenres = async () => {
        const { data: genres } = await genreApi.getAll();
        setGenres(genres);
    };

    const getGenreById = async (id) => {
        const { data: genre } = await genreApi.getById(id);
        setGenre(genre);
    };

    return {
        getAllGenres,
        getGenreById,
        genres,
        genre
    }
}