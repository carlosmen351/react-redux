import React from 'react';
import './searcher.css';

function SearchBar() {
  return (
    <div className='searcher'>
      <input
        className='searcher-bar'
      type='text'
      id="Searched"
      variant='standard'
    />
    </div>
  );
};

export default SearchBar;