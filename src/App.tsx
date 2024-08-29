import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/about'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
    </div>
  );
}

export default App;
