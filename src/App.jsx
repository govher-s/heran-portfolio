import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/homepage.jsx'; 
import Experience from './pages/experience/experience.jsx';
import Projects from './pages/projects/projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;