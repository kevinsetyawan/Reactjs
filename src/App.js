import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';
//import Home from './Component/Fungsional/Home';
import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp/>
      <switch>
         <Route exact path="/" component={HomePage}/>
         <Route exact path="/" component={About}/>
      </switch>
    </BrowserRouter>
  );
}

export default App;
