/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/pages/Greet.js
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
import Navbar from "../views/Navbar";
import Header from "../views/Header";
import Footer from "../views/Footer";
const useStyles = makeStyles({
  root: {
    margin: "0",
    padding: "0",
    height: "200vh",
    width: "auto"
  }
})
function Greet() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Navbar scroll={false} />
      <Header />
       {console.log("browser timezone:",new Intl.DateTimeFormat().resolvedOptions().timeZone)}
      <Typography variant="h3">It is Greet</Typography>
      <Footer />
    </Box>
  )
}

export default Greet
