import React from 'react';
import PokemonCard from './PokemonCard';
import './PokemonCard';

const PokemonList = ({pokemons}) => {

  return (
    <div className='container'>
        {pokemons.map((pokemon, index) => {
          return <PokemonCard pokemon={pokemon} key={`pokemon-${index}`} />;
        })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: [],
}

export default PokemonList;