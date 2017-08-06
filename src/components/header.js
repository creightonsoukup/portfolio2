import React from 'react';
import Navbar from './navbar';

const Header = (props) => {
  return (
    <div className='header'>
      <Navbar toggleNav={props.toggleNav} openNav={props.openNav}/>
      <h1 className='header-text'>{'Creighton Soukup'}</h1>
      <div className='header-list sub-header-text'>
        <h2>{'fullstack development'}</h2>
        <h2>{'growth hacking'}</h2>
        <h2>{'brand development'}</h2>
      </div>
    </div>
  )
}

export default Header
