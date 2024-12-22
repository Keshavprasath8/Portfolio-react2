import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/pages/Navbar1';
import Home1 from './pages/Home1';
import About from './pages/About1';
import Project from './pages/Project1';
import Contact from './pages/ContactMe';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
