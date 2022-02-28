import { SET_POKEMON, SET_ERROR, CLEAR_ERROR, FETCH_POKEMONS } from './type.jsx';

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

const fetchPokemons = () => ({
  type: FETCH_POKEMONS,
});

export { setPokemons, setError, clearError, fetchPokemons };