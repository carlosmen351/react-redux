import { axiosInstance } from '../services/axios';
import axios from 'axios';

const getPokemons = (limit = 151) =>
axiosInstance
    .get(`/pokemon?limit=${limit}`)
    .then((response) => response.data)

const POKEAPI = getPokemons();

const getPokemonWithDetails = () => {
  return POKEAPI
  .then(data => {
    const pokemonList = data.results;
    return Promise.all(pokemonList.map((pokemon) => axios.get(pokemon.url))
    );
  })
  .then((pokemonResponse) => {
    const pokemonData = pokemonResponse.map(response => response.data)
    return pokemonData;
  })
};

export { getPokemons, getPokemonWithDetails };