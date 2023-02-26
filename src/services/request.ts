import axios from "axios";
import { config } from "../utils/env";

const request = axios.create({
    baseURL: config.baseUrl,
    headers: {
        "Content-Type": "application/json"
    }
});

request.interceptors.request.use(
    config => {
        const clientId = localStorage.getItem("rezpond-client-id");
        if (clientId) {
            config.headers["X-Client-Id"] = clientId;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


export default request;