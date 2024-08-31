import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About'
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
