import React from 'react';
import Silk from './Silk';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Silk background fills the whole screen */}
      <div className="silk-background">
        <Silk
          speed={5}
          scale={1}
          color="#112250"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Center circle with image */}
      <div className="center-circle">
        <img src="/profile.jpg" alt="Profile" />
      </div>
    </div>
  );
}

export default App;
