
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

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
    const newItem={...item}
   const cartItems=[...cart]
   const newCartItem=[...cartItems,item]
   setCart(newCartItem)
   


 }



  return (
    <Router>
     
      <Navbar length={cart.length}    />
    <Switch>
      <Route path="/" exact  render={(props)=><Products products={products} cartHandler={cartHandler} {...props}  />}  />
      <Route  path="/cart" render={(props)=><Cart cart={cart} cartHandler={cartHandler} {...props}  />}  />
       
    
    </Switch>
   
    </Router>
  );
}

export default App;
