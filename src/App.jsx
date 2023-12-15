import './App.css';
import React from 'react';
import Home from './routes/Home';
import { Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Contact from './routes/Contact';
import Services from './routes/Services';
import Objectives from './routes/Objectives';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/objectives" element={<Objectives />} />
      </Routes>
    </>
  );
}

export default App;
