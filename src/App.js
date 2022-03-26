import React from 'react';
import './App.css';
import Benefits from './Components/Benefits/Benefits';
import Facilities from './Components/Facilities/Facilities';
import Header from './Components/Header/Header';
import Introduction from './Components/Introduction/Introduction';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Facilities />
      <Benefits />
    </div>
  );
}

export default App;
