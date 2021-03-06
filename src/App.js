import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { commerce } from "./lib/commerce";

import Cart from "./components/cart/Cart";
import Login from "./components/SignUp/Login";

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
    const newCart = [...cart];
    const exist = newCart.find((product) => product.id === item.id);
    console.log(exist);

    if (!exist) {
      const newItem = { ...item, qty: 1 };
      const updatedCart = [...newCart, newItem];

      setCart(updatedCart);
    } else {
      const index = newCart.indexOf(exist);

      const oldItem = newCart[index];
      const newItem = { ...oldItem };
      newItem.qty = newItem.qty + 1;
      newCart[index] = newItem;

      setCart(newCart);
    }
  };

  const increaseHandler = (item) => {
    const newCart = [...cart];
    const index = newCart.indexOf(item);
    const oldItem = newCart[index];
    const newItem = { ...oldItem };
    newItem.qty = newItem.qty + 1;
    newCart[index] = newItem;

    setCart(newCart);
  };
  const decreaseHandler = (item) => {
    if (item.qty > 2) {
      const newCart = [...cart];
      const index = newCart.indexOf(item);
      const oldItem = newCart[index];
      const newItem = { ...oldItem };
      newItem.qty = newItem.qty - 1;
      newCart[index] = newItem;

      setCart(newCart);
    } else {
      const newCart = [...cart];
      const updatedCart = newCart.filter((product) => {
        return product.id !== item.id;
      });
      setCart(updatedCart);
    }
  };

  return (
    <div className="main-content">
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
              setCart={setCart}
              decreaseHandler={decreaseHandler}
              increaseHandler={increaseHandler}
              cartHandler={cartHandler}
              {...props}
            />
          )}
        />
        <Route path="/checkout" exact component={Login}  />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
