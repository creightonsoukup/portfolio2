import React from 'react';
import List from './list';
import Logo from './logo'

const Navbar = (props) => {
  const navBarItems = ['portolio', 'about', 'contact', 'blog', 'client login']
  return (
    <nav className='navbar'>
      <Logo/>
      <div className='navlinks'>
        { props.openNav ? (
          <div className='dropdown'onClick={props.toggleNav}>
            <i className="fa fa-times"></i>
            <List nav={navBarItems} />
          </div>
        ) : (
          <div onClick={props.toggleNav}>
            <i className="fa fa-bars-btb"></i>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
