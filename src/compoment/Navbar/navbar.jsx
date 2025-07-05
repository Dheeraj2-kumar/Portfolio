import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />
      <div className="desktopMenu">
  <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
  <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
  <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Project</Link>
  <Link activeClass='active' to='contact1' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Clients</Link>
</div>
     
      <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}>Contact Me
      </button>

      <img src={menu} alt="menu" className='mobMenu logo' onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
  <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Home</Link>
  <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>About</Link>
  <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Project</Link>
  <Link activeClass='active' to='contact1' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => { console.log('Contact Clicked'); setShowMenu(false); }}>Clients</Link>


</div>
    </nav>
  );
}

export default Navbar;
