import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css';

//BEM Block element modifier

const navbar = () => {
  return (
    <div className="navbar">
        <a href="#index">    
            <div class="box glowing"><div class="box "></div></div>
        </a>
        <div class="nav-links">
            <ul>
                <li><a href="#experience">EXPERIENCE</a></li>
                <li><a href="#projects">PROJECTS</a></li>                
                <li><a href="#contact">CONTACT</a></li>
            </ul>    
        </div>
      </div>
  )
}

export default navbar