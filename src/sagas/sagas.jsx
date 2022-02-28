import { call, put, takeEvery } from 'redux-saga/effects';
import { setPokemons } from '../actions/actions';
import { FETCH_POKEMONS } from '../actions/type';
import { getPokemonWithDetails } from '../API/getPokemons';

function* fetchPokemonWithDetails(action) {
  try {
    const pokemonsWithDetails = yield call(getPokemonWithDetails);
    yield put(setPokemons(pokemonsWithDetails))
  } catch (error) {
    console.log(error)
  }
};

function* pokemonSaga() {
  yield takeEvery(FETCH_POKEMONS, fetchPokemonWithDetails);
}

export { pokemonSaga };