// App.js
import React from 'react';
import AutocompleteSearch from './AutocompleteSearch';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <AutocompleteSearch/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
