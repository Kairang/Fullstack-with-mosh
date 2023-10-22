import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import auth from '../services/authServer';

axios.defaults.headers.common['x-auth-token'] = auth.getJwt();

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 6000,
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (expectedError) {
        console.error('Expected error::', error);
        enqueueSnackbar(error.response.data, { variant: 'error' });
    };

    return Promise.reject(error);
});

const AxiosInstance = {
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete: instance.delete
}

export default AxiosInstance;