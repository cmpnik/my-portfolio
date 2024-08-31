import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Skills from './components/skills/Skills'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
