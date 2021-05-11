
import './App.css';
import React, { useState,useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import {commerce} from "./lib/commerce"
import { useEventCallback } from '@material-ui/core';


function App() {
  const [products,setProducts]=useState([])

const fetchProducts=async()=>{
  const {data}=await commerce.products.list()
  setProducts(data)
}

 useEffect(()=>{
   fetchProducts()

 },[])
 console.log(product)


  return (
    <div className="App">
      <Navbar/>
     <Products/>
    </div>
  );
}

export default App;
