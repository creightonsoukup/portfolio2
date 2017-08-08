import React from 'react';
import Navbar from './navbar';

const Header = (props) => {
  return (
    <header className='header'>
      <Navbar toggleNav={props.toggleNav} openNav={props.openNav}/>
      <h1 className='header-text'>{'Creighton Soukup'}</h1>
      <div className='header-list sub-header-text'>
        <h2>{'fullstack development'}</h2>
        <h2>{'and design'}</h2>
      </div>
    </header>
  )
}

export default Header
