import axios from 'axios';
import {axiosInstance} from '../services/axios';

const getPokemons = (limit = 26) =>
  axiosInstance
    .get(`/pokemon?limit=${limit}`)
    .then((response) => response.data);

const getPokemonsWithDetails = (pokemons) => {
  return Promise.all(pokemons.map((pokemon) => axios.get(pokemon.url)))
    .then((pokemonResponses) => {
      return pokemonResponses.map((res) => res.data);
    });
};

export { getPokemons, getPokemonsWithDetails };