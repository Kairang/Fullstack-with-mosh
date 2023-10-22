import AxiosInstance from "../utils/axiosInstance";

const movieApi = {
    getAll: () => AxiosInstance.get('/movies'),
    getById: (id) => AxiosInstance.get(`/movies/${id}`),
    createMovie: (movie) => AxiosInstance.post('/movies', { ...movie }),
    updateMovie: (movie, id) => AxiosInstance.put(`/movies/${id}`, { ...movie }),
    deleteMovie: (id) => AxiosInstance.delete(`/movies/${id}`)
}

export default movieApi;