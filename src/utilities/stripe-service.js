import axios from 'axios'
import { getToken } from "./users-service";

const BASE_URL = 'http://localhost:8080/api/v1/';

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${getToken}`}
})

