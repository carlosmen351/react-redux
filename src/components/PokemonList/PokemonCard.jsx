import React from 'react';
import { Icon } from '@mui/material';
import Tab from '@mui/material/Tab';
import './PokemonList.css';
import { setFavorite } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import { FAV_COLOR, MAIN_COLOR } from '../../utils/constants';

const PokemonCard = ({ pokemon }) => {

  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(setFavorite({pokemonId: pokemon.id}));
  };

  const color = pokemon.favorite ? 'secondary' : 'action';

  if (!pokemon) return null;

  return (
    <div className='pokeCard' >
      <button
        className='icon'
        onClick={handleFavorite}
      >
        <Icon
          color={color}
        >
          star
        </Icon>
      </button>
      <img
        className='pokeCard-img'
        src={pokemon.sprites.front_default}
        alt='pokeimagen'
      />
      <h2 className='pokeCard-title'>{pokemon.name}</h2>
      {pokemon.types.map((type) => (
        <div
          id='labelTypes-container'
          value={pokemon.id}
          key={`${pokemon.id}-${type.type.name}`}
        >
          <Tab
            id='labelTypes'
            value={pokemon.id}
            label={type.type.name} />
        </div>
      )
      )}
    </div>
  );
};

export default PokemonCard;