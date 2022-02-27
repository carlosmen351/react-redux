import {axiosInstance} from '../services/axios';

const getPokemons = (limit = 151) =>
axiosInstance
    .get(`/pokemon?limit=${limit}`)
    .then((response) => response.data)

export { getPokemons };