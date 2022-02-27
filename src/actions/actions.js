import { SET_POKEMON, SET_ERROR, CLEAR_ERROR } from './type.jsx';
import { getPokemons } from '../API/getPokemons.jsx';
import axios from 'axios';


const setPokemons = (payload) => ({
  type: SET_POKEMON,
  payload,
})

const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});


const POKEAPI = getPokemons();

const getPokemonWithDetails = () => (dispatch) => {
  POKEAPI
  .then(data => {
    const pokemonList = data.results;
    return Promise.all(pokemonList.map((pokemon) => axios.get(pokemon.url))
    );
  })
  .then((pokemonResponse) => {
    const pokemonData = pokemonResponse.map(response => response.data)
    dispatch(setPokemons(pokemonData))
  })
  .catch((error) => {
  dispatch(setError({message: 'Ocurrio un error', error}))
})
};

export { setPokemons, setError, clearError, getPokemonWithDetails };