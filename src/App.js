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
import Greet from "../src/components/pages/Greet"
import Home from "../src/components/pages/Home"
function App() {
  return (
    <Router>
      <Box className="app">
        <Switch>
          <Route exact path="/" component={Greet}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
