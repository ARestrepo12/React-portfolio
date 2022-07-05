import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
