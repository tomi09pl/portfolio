import React from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Header/>
      <Portfolio/>
      <Skills/>
      <AboutMe/>
    </div>
  );
}

export default App;
