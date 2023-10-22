import AxiosInstance from "../utils/axiosInstance";

const genreApi = {
    getAll: () => AxiosInstance.get('/genres'),
    getById: (id) => AxiosInstance.get(`/genres/${id}`),
    createGenre: (genre) => AxiosInstance.post('/genres', { ...genre }),
    updateGenre: (genre, id) => AxiosInstance.put(`/genres/${id}`, { ...genre }),
    deleteGenre: (id) => AxiosInstance.delete(`/genres/${id}`)
}

export default genreApi;