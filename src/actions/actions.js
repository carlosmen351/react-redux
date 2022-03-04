import { SET_POKEMON, SET_ERROR, CLEAR_ERROR, TOGGLE_LOADING, SET_FAVORITE } from './type.jsx';
import { getPokemons, getPokemonsWithDetails } from '../API/getPokemons.jsx';

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

const toggleLoader = () => ({
  type: TOGGLE_LOADING,
});

const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

const fetchPokemonsWithDetails = () => async (dispatch) => {
  try {
    dispatch(toggleLoader());
    const response = await getPokemons();
    const pokemons = response.results;
    const pokemonsWithDetails = await getPokemonsWithDetails(pokemons);
    dispatch(setPokemons(pokemonsWithDetails));
    dispatch(toggleLoader());
  } catch (error) {
    dispatch(setError({ message: 'Oops! Something went wrong', error }));
    dispatch(toggleLoader())
  }
}

export { setPokemons, setError, clearError, toggleLoader, setFavorite, fetchPokemonsWithDetails };