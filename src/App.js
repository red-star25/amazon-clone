import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
import CheckoutPage from "./CheckoutPage"
import Header from './Header';

function App() {
  return (
    <Router>
        <div className="app">
			<Switch>
                    <Route path = "/checkout">
                        <Header/>
                        <CheckoutPage/>
                    </Route>
                    <Route path = "/login">
                        <LoginPage/>
                    </Route>
                    <Route path = "/">
                        <Header/>
                        <HomePage/>
                    </Route>
            </Switch>
        </div>
    </Router>

  );
}

export default App;
