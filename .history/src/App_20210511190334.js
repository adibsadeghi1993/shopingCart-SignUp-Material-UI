import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { commerce } from "./lib/commerce";

import Cart from "./components/cart/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
 
  const cartHandler = (item) => {
    //adding item to cart and andding quantity to item
    const newItem = { ...item, qty: 1 };
    const cartItems = [...cart];
    const newCartItem = [...cartItems, newItem];
    setCart(newCartItem);
  };

 const increaseHandler=(item)=>{
  // const filteredItem=cart.find((a)=>(a.id===item.id))
  // filteredItem.qty=filteredItem.qty+1
//  const oldItem={...filteredItem}
//  const  updatedItem={...oldItem,qty:oldItem.qty+1}
//  const oldCart=[...cart]
//  const updatedCart=[...oldCart,updatedItem]
//  setCart(updatedCart)
// console.log(filteredItem)
// console.log(item)
const index =

 
 }
 const decreaseHandler=(item)=>{
  console.log(item)
   }

  return (
    <Router>
      <Navbar length={cart.length} />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <Products
              products={products}
              cartHandler={cartHandler}
              {...props}
            />
          )}
        />
        <Route
          path="/cart"
          render={(props) => (
            <Cart
              cart={cart}
              decreaseHandler={decreaseHandler}
              increaseHandler={increaseHandler}
              cartHandler={cartHandler}
              {...props}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;