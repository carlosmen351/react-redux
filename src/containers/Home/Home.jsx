import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWithDetails } from '../../actions/actions'
import {Loader} from '../../components/Loader/loader'
import Menu from '../../components/Menu/Menu';
import PokemonList from '../../components/PokemonList/PokemonList';
import SearchBar from '../../components/Searcher/Searcher';
import './home.css';



function Home() {

  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.list);
  const loading = useSelector((state) => state.loading)

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, []);
  return (
    <div className='Home'>
      <Menu />
      <SearchBar />
      {loading && <Loader/>}
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;