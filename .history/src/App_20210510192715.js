
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import {commerce} from "./lib/commerce"


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Products/>
    </div>
  );
}

export default App;
