import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faChrome } from '@fortawesome/free-brands-svg-icons'; // Import the icons you need
import './App.css'; // Import Navbar CSS file

function Navbar() {
  return (
    <nav>
      <ul className="navbar-menu">
        <li><a rel="noreferrer" target='_blank' href="https://adityaver.netlify.app/"><FontAwesomeIcon icon={faChrome} /> Protfolio</a></li>
        <li><a rel="noreferrer" target='_blank' href="https://github.com/ADITYAVOFFICIAL/Autocomplete_ReactJS"><FontAwesomeIcon icon={faGithub} /> GitHub</a></li>
        <li><a rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/aditya-verma-real/"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
