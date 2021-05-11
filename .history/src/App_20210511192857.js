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
const newCart=[...cart]
const index =newCart.indexOf(item)
const oldItem=newCart[index]
const newItem={...oldItem}
newItem.qty=newItem.qty+1
newCart[index]=newItem

setCart(newCart)

 
 }
 const decreaseHandler=(item)=>{
  if(item.qty>2){
    const newCart=[...cart]
const index =newCart.indexOf(item)
const oldItem=newCart[index]
const newItem={...oldItem}
newItem.qty=newItem.qty-1
newCart[index]=newItem

setCart(newCart)
  }else{
    const newCa
  }
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
