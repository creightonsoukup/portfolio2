import React from 'react';
import Navbar from './navbar';

const Header = (props) => {
  return (
    <header className='header'>
      <h1 className='header-text'>{'Creighton Soukup'}</h1>
      <div className='header-list'>
        <h2>{'fullstack development'}</h2>
        <h2>{'and design'}</h2>
      </div>
    </header>
  )
}

export default Header
