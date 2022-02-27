import React from 'react';
import './menu.css';
import logo from '../../static/images/logo_v4.svg';

const NavBar = () => {
  return (
    <nav className='menu-navBar'>
      <a className='menu-button' href="/">Home</a>
      <img src={logo} alt="logo" />
      <a className='menu-button' href="/">Favoritos</a>
    </nav>
  );
};

export default NavBar;