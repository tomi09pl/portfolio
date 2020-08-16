import React from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Portfolio/>
      <Skills/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
