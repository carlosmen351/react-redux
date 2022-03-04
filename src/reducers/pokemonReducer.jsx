import { SET_POKEMON, SET_ERROR, CLEAR_ERROR, TOGGLE_LOADING, SET_FAVORITE } from "../actions/type";

const initialState = {
  list: [],
  error: '',
  loading: false,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_POKEMON:
      return { ...state, list: action.payload };

    case SET_FAVORITE:
      const newPokemonList = [...state.list];
      const currentPokemonIndex = newPokemonList.findIndex(
      (elem) => elem.id === action.payload.pokemonId
      );
      console.log(currentPokemonIndex)
    if (currentPokemonIndex >= 0) {
      newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
    }
      return { ...state, list: newPokemonList };

    case SET_ERROR:
      return { ...state, error: action.payload.message };

    case CLEAR_ERROR:
      return { ...state, error: '' };

      case TOGGLE_LOADING:
      return { ...state, loading: !state.loading };

    default:
      return state;
  }
};

export { pokemonReducer };