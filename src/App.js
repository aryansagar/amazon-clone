import React, { useEffect } from "react";
import './App.css';
import Header from "./Header"
import Home from "./Home";
import Login from "./Login"
import Checkout from "./Checkout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) =>{
      console.log("THE USER IS >>> ", authUser);
      if(authUser){
    // the user logged in/ the user was logged in
      }
      else{
        // the user is logged in
      }
    })
  }, [])

  return (
    //BEM
    <Router>

      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
