
import './App.css';
import React, { useState,useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import {commerce} from "./lib/commerce"
import { useEventCallback } from '@material-ui/core';
import Cart from '.';


function App() {
  const [products,setProducts]=useState([])
  const [cart,setCart]=useState([])

const fetchProducts=async()=>{
  const {data}=await commerce.products.list()
  setProducts(data)
}

 useEffect(()=>{
   fetchProducts()

 },[])
//  console.log(products)
 const cartHandler=(item)=>{
   
   const cartItems=[...cart,item]
   setCart(cartItems)
   console.log(cart)


 }


  return (
    <div className="App">
      <Navbar length={cart.length}    />
     {/* <Products products={products} cartHandler={cartHandler}   /> */}
     <Cart/>
    </div>
  );
}

export default App;
