// Navbar.js
import React from 'react';
import './App.css'; // Import Navbar CSS file

function Navbar() {
  return (
    <nav>
      <ul className="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
