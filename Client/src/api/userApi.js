import AxiosInstance from "../utils/axiosInstance";

const userApi = {
    createUser: (user) => AxiosInstance.post('/users', { ...user }),
}

export default userApi;