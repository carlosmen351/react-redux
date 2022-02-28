import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../../actions/actions';
import Menu from '../../components/Menu/Menu';
import PokemonList from '../../components/PokemonList/PokemonList';
import SearchBar from '../../components/Searcher/Searcher';
import './home.css';



function Home() {

  const dispatch = useDispatch();
  const list = useSelector(state => state.list);

  useEffect(() => {
    dispatch(fetchPokemons())
  }, []);
  return (
    <div className='Home'>
      <Menu />
      <SearchBar/>
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;