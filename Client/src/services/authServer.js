import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { enqueueSnackbar } from 'notistack';

const instance = axios.create({
    baseURL: process.env.REACT_APP_AUTH_SERVER,
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

const tokenKey = 'token';

async function login(email, password) {
    const { data } = await instance.post('/auth', { email, password });
    enqueueSnackbar(data.msg, { variant: 'success' });
    localStorage.setItem(tokenKey, data.token);
};

function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
};

function logout() {
    localStorage.removeItem(tokenKey);
};

function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);

        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    }
};

function getJwt() {
    return localStorage.getItem(tokenKey);
};

const auth = {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt,
};

export default auth;