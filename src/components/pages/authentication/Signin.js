/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/forms/Signin.js
 * Key Options:
 * -
 * Revision History:
 * - Jan 18, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 */
import React from 'react'
// material-ui core 
import {Box} from '@material-ui/core';
// material-ui style
import {makeStyles} from "@material-ui/styles";
// components
import Footer from "../../views/Footer";
// images
import headerImage from "../../../assets/images/header-image-1st.jpg";
const useStyles = makeStyles({
  root: {
    margin: "0",
    padding: "0",
    backgroundSize:"cover",
    backgroundImage: `url(${headerImage})`,
    backgroundPosition: "center",
    objectFit: "contain",
    minHeight: "100vh",
    width:"100%",
    height:"100%",
  },
  fade: {
    backgroundColor: "rgba(37, 37, 37, 0.61)",
    height: "100vh",
  },
  footer: {
    marginTop: "none",
  }
})
function Signin() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.fade}>
        <Box>
          
        </Box>
        <Box>
          <Footer className={classes.footer} background="#0d082766"/>
        </Box>
      </Box>
    </Box>
  )
}

export default Signin
