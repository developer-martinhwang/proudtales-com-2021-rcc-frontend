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
import Signin from "./components/pages/authentication/Signin";
import Signup from "./components/pages/authentication/Signup";
import EmailVerification from "./components/pages/authentication/EmailVerification";
import ConfirmVerification from "./components/pages/authentication/ConfirmVerification";
function App() {
  return (
    <Router>
      <Box className="app">
        <Switch>
          <Route exact path="/" component={Greet}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/authentication/signin" component={Signin} />
          <Route exact path="/authentication/signup" component={Signup} />
          <Route exact path="/authentication/emailverification" component={EmailVerification} />
          <Route exact path="/authentication/confirmverification" component={ConfirmVerification} />
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
