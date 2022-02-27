import React from 'react';
import { Icon } from '@mui/material';
import Tab from '@mui/material/Tab';
import './PokemonList.css';

const PokemonCard = ({pokemon}) => {
  return (
    <div className='pokeCard' >
      <Icon
      className='icon'
      >star</Icon>
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