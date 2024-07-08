import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from "./pages/Home";
import Helicopter from "./pages/Projects/Helicopter"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Header/>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Helicopter" element={<Helicopter/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;