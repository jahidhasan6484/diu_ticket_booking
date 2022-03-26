import React from 'react';
import './App.css';
import Benefits from './Components/Benefits/Benefits';
import Contact from './Components/Contact/Contact';
import Facilities from './Components/Facilities/Facilities';
import Header from './Components/Header/Header';
import Introduction from './Components/Introduction/Introduction';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Facilities />
      <Benefits />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
