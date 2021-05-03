import React from 'react';
import './App.css';
import About from './components/About';
import Banner from "./components/Banner";
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div>
    <Banner/>
    <Navbar/>
    <Services/>
    <About/>
    </div>
  );
}

export default App;
