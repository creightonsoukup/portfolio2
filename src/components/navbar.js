import React from 'react';
import List from './list';
import Logo from './logo'
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = (props) => {
  const navBarItems = ['portolio', 'contact', 'blog', 'resume', 'client login']
  const vpWidth = window.innerWidth
  return (
    <nav className='navbar'>
      <Logo/>
      { vpWidth > 768 ? (
        <div className='open'>
          <ul className='left'>
            <li><Link to='/#portfolio'>portfolio</Link></li>
            <li><Link to='/#feed'>feed</Link></li>
            <li><Link to='/#blog'>blog</Link></li>
            <li><Link to='/#contact'>contact</Link></li>
          </ul>
          <ul className='right'>
            <li><a href={require('../assets/Soukup_Resume.pdf')} download>resume</a></li>
            <li><Link to='/login'>login</Link></li>
          </ul>
        </div>
      ) : (
        <div className='collapse'>
          { props.openNav ? (
            <ul className='dropdown' onClick={props.toggleNav}>
              <i className="fa fa-times"></i>
              <li><Link to='/#portfolio'>portfolio</Link></li>
              <li><Link to='/#feed'>feed</Link></li>
              <li><Link to='/#blog'>blog</Link></li>
              <li><Link to='/#contact'>contact</Link></li>
              <li><a href={require('../assets/Soukup_Resume.pdf')} download>download resume</a></li>
              <li>-</li>
              <li><Link to='/login'>login</Link></li>
            </ul>
          ) : (
            <div onClick={props.toggleNav}>
              <i className="fa fa-bars-btb"></i>
            </div>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
