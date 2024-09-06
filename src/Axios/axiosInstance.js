import axios from "axios";

const axiosURL = process.env.REACT_APP_AXIOS_URL;

const userInstance = axios.create({
    baseURL: axiosURL
});

export { userInstance }