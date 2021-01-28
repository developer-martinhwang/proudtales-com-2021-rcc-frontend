/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/views/Header.js
 * Key Options:
 * -
 * Revision History:
 * - Jan 18, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 * - Jan 27, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : updated header Image
 */
import React from "react";
// material-ui core 
import {Box} from "@material-ui/core";
// material-ui style
import {makeStyles} from "@material-ui/styles";
// images
import headerImage from "../../assets/images/header-image-1st.jpg"
const useStyles = makeStyles({
  root: {
    margin: "0",
    padding: "0",
  },
  headerImage1: {
    backgroundSize:"cover",
    backgroundImage: `url(${headerImage})`,
    backgroundPosition: "center",
    height: "55vh",
    objectFit: "contain",
  },
  headerFadeBottom: {
    height: "7.4vh",
    backgroundImage: "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)",
    marginTop: "-7vh"
  }
})
function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.headerImage1}>
      </Box>
      <Box className={classes.headerFadeBottom}/>
    </Box>
  )
}

export default Header
