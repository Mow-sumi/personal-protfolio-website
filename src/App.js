import React from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import About from './components/About';
import Banner from "./components/Banner";
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact/Contact';
import Home from '../src/components/Home/Home';


function App() {
  return (
    <Router>

      {/* <Banner />
      <Navbar />
      <Services />
      <About /> */}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
         <Route path='/about'>
          <About />
        </Route>
        <Route path='/services'>
          <Services />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
