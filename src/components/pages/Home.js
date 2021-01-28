/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/pages/Home.js
 * Key Options:
 * -
 * Revision History:
 * - Jan 18, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 * - Jan 27, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : updated styles, added Navbar, Header, Footer
 */
import React from "react";
// material-ui core 
import {Box, Typography} from "@material-ui/core";
// material-ui style
import {makeStyles} from "@material-ui/styles";
// components
import Header from "../views/Header";
import Navbar from "../views/Navbar";
import Footer from "../views/Footer";
const useStyles = makeStyles({
  root: {
    margin: "0",
    padding: "0",
    width: "auto"
  },
})
function Home() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Navbar scroll={true} position="fixed"/>
      <Header /> 
      <Typography variant="h2">It is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is HomeIt is Home
      
      </Typography>
      <Footer />
    </Box>
  )
}

export default Home
