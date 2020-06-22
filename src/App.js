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
import DetailComp from './Component/Fungsional/DetailComp';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp/>
      <switch>
         <Route exact path="/" component={HomePage}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/detail/:id" component={DetailComp}/>
      </switch>
    </BrowserRouter>
  );
}

export default App;
