import axios from "axios";

const axiosURL = process.env.REACT_APP_AXIOS_URL;

const userInstance = axios.create({
    baseURL: axiosURL
});

userInstance.interceptors.request.use((request) => {
    const token = localStorage.getItem("jobportal-jwt");
    request.headers.Authorization = `Bearer ${token}`;
    return request;
});

export { userInstance }