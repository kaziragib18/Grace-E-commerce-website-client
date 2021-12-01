import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import Success from "./Pages/Success";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login></Login>}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register></Register>}
        </Route>
        <Route path="/products/:category">
          <ProductList></ProductList>
        </Route>
        <Route path="/product/:id">
          <Product></Product>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
        <Route path="/success">
          <Success></Success>
        </Route>
      </Switch>
    </Router >
  );
};

export default App;