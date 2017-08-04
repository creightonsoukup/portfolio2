import React from 'react';
import List from './list';
import Logo from './logo'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <Logo/>
      <List />
    </div>
  )
}

export default Navbar
