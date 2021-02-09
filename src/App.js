/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/App.js
 * Key Options:
 * -
 * Revision History:
 * - Jan 18, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 * - Jan 26, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : updated Router 
 * - Feb 8, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : removed page components(ConfirmVerificaion.js, EmailVerification)
 *     changed <Route component = {Auth}> which are associated with auth 
 */
import "./App.css";
import React from "react";
// material-ui core
import {Box} from "@material-ui/core";
// react router
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Greet from "../src/components/pages/Greet";
import Home from "../src/components/pages/Home";
  // components-authentication
import Login from "./components/pages/authentication/Login";
// import Signup from "./components/pages/authentication/Signup";
import Auth from "./components/pages/Auth";
function App() {
  return (
    <Router>
      <Box className="app">
        <Switch>
          <Route exact path="/" component={Greet}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/authentication/login" component={Login} />
          <Route exact path="/authentication/signup" component={Auth} />
          <Route exact path="/authentication/emailverification" component={Auth} />
          <Route exact path="/authentication/confirmverification" component={Auth} />
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
