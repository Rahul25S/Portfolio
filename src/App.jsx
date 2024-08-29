import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col">
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <SocialLinks />
      </div>
    </Router>
  );
};

export default App;
