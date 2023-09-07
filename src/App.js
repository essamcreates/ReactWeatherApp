import React, { useState } from 'react';
import WeatherContainer from './containers/WeatherContainer';
import './App.css';

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url('./background/weatherbackground.jpg')`, 
        backgroundSize: 'cover', 
      }}
    >
      <WeatherContainer />
    </div>
  );
}

export default App;
