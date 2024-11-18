import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const [activeLink, setActiveLink] = useState('home');
    const[isMenuOpen, setIsMenuOpen] = useState(false);


    const handleLinkClick = (link) =>{
        setActiveLink(link);
        setIsMenuOpen(false); 
    }
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);

    }

    // cloas the menu automaticaaly
    useEffect(() =>{
        const handleResize = () =>{
            if(window.innerWidth >=768){
                setIsMenuOpen(false);
            }
        }
        window.addEventListener('resize', handleResize);
        return () =>{
            window.removeEventListener('resize', handleResize);
        }
    },[]);
  return (
    <div>
      <nav className='navbar'>
       <div className='logo'>
        
        {
            isMenuOpen ?(
                <div className='close-btn' onClick={toggleMenu}>
                    &times;
                </div>
            ) :(
                <Link to ="/" onClick={() => handleLinkClick('home')}>MyLogo</Link>
            )
        }
       </div>

       {
        !isMenuOpen &&(
            <div className='menu-icon' onClick={toggleMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>

            </div>
        )
       }
       <ul className={`nav-links ${isMenuOpen ? 'active' : ""}`}>
        <li>
            <Link to="/home" className={`nav-link ${activeLink === 'home' ? 'active': ""}`} onClick={() => handleLinkClick('home') }>Home</Link>
        </li>
        <li>
            <Link to="/about" className={`nav-link ${activeLink === 'about' ? 'active': ""}`} onClick={() => handleLinkClick("about") }>About Us</Link>
        </li>
        <li>
            <Link to="/service" className={`nav-link ${activeLink === 'service' ? 'active': ""}`} onClick={() => handleLinkClick("service") }>Services</Link>
        </li>
        <li>
            <Link to="/contact" className={`nav-link ${activeLink === 'contact' ? 'active': ""}`} onClick={() => handleLinkClick("contact") }>Contact </Link>
        </li>
        
       </ul>
      </nav>
    </div>
  )
}

export default Navbar
