import React,{useEffect} from "react";
import './App.css';
import Header from "./Header"
import Home from "./Home";
import Login from "./Login"
import Checkout from "./Checkout"
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import {auth, db} from "./firebase"
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

 useEffect(() => {
   // will only run once when the app component loads..
   auth.onAuthStateChanged(authUser => {
     console.log("THE USER IS >>>>", authUser);

     if(authUser){
    // the user just logged in // the user was logged  in
    dispatch({
      type: "SET_USER",
      user: authUser
    })
     }
     else {
       //the user is logged in
       dispatch({
         type: 'SET_USER',
         user: null
       })
     }
   })
 }, []);
  return (
    //BEM
    <Router>
       
       <div className="app">
        <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path = "/checkout">
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