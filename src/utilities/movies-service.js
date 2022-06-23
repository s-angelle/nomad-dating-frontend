import axios from 'axios';
import { getToken } from './users-service';

const BASE_URL = 'http://localhost:8080/api/v1/movies'

export const getMovies =  async () => {
    try {
        const options = {
            headers: {
                Authorization:`Bearer ${getToken()}`
            }
        }
        const response= await axios.get(BASE_URL, options);

        console.log(response)
    } catch (e) {
        console.log(e)
    }
}