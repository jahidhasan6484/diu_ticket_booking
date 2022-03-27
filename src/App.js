import React from 'react';
import './App.css';
import Benefits from './Components/Benefits/Benefits';
import Contact from './Components/Contact/Contact';
import Countup from './Components/Countup/Countup';
import Facilities from './Components/Facilities/Facilities';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Introduction from './Components/Introduction/Introduction';
import Policies from './Components/Policies/Policies';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Facilities />
      <Benefits />
      <Pricing />
      <Countup />
      <Policies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
