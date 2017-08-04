import React from 'react';
import List from './list';
import Logo from './logo'

const Navbar = (props) => {
  const navBarItems = ['portolio', 'about', 'contact', 'blog']
  return (
    <div className='navbar'>
      <Logo/>
      <List nav={navBarItems} />
    </div>
  )
}

export default Navbar
