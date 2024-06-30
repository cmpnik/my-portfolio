import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import ContactForm from './components/Contact/ContactForm';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <ContactForm />
    </div>
  )
}

export default App;