import userApi from "../api/userApi";

export function register(user) {
    return userApi.createUser(user);
}