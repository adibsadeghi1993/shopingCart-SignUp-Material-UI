
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { useState,useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import {commerce} from "./lib/commerce"

import Cart from './components/cart/Cart';


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
    <Router>
     
      <Navbar length={cart.length}    />
    <Switch>
      <Route/>
       <Products products={products} cartHandler={cartHandler}   />
     <Cart cart={cart}  />
    </Switch>
   
    </Router>
  );
}

export default App;
