
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import {commerce} from "./lib/commerce"


function App() {
  const [products,setProducts]
  return (
    <div className="App">
      <Navbar/>
     <Products/>
    </div>
  );
}

export default App;