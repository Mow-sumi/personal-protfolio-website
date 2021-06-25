import React from 'react';
import nav from '../images/nav.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <nav className="navbar">
          <div className="container">

            <div className="navbar_container">
            <ul className="navbar_left">
                  <div className="navbar_left-logo">
                      <img src={nav} alt=""/>
                  </div>
              </ul>
              <ul className="navbar_right">
                 <li><a href="/">Home</a></li>
                 <li><a href="/Services">Services</a></li>
                 <li><a href="/About">About</a></li>
                 <li><a href="/Skills">Skills</a></li>
                 <li><a href="/Portfolio">Portfolio</a></li>
                 <li><a href="/Blog">Blog</a></li>
                <li><Link to = "/Contact">Contact</Link></li>

              </ul>
            </div>
               
          </div>

      </nav>
    );
};

export default Navbar;