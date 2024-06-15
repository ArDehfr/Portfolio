import './App.css';
import React from 'react';
import Hero from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
        <MyWork />
        <Contact />
      </div>
    </>
  );
}

export default App;
