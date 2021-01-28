/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/views/Navbar.js
 * Key Options:
 * -
 * Revision History:
 * - Jan 18, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 */
import React, {useState, useEffect} from "react";
// material-ui core 
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles'
// material-ui icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';
const useStyles = makeStyles({
  root:{
    fontSize: "1.5em",
  },
  accountBoxIcon: {
    fontSize: "2em"
  },
  yellow: {
    zIndex: "1",
    position: "absolute",
    width: "100%",
    display: "flex",
  },
  red: {
    background:"red",
    position:"fixed",
    top: "0",
    width: "100%",
    zIndex: "1",
    display: "flex",
    transitionTimingFunction: "ease-in",
    transition: "a;; 0.5s",
  }
})
function Navbar(prop) {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      }else{
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <Box className={classes.root}>
      <Box className={ prop.scroll && show ? classes.red : classes.yellow} display="flex" justifyContent="space-between">
        <Box margin="10px">
          Icons
        </Box>
        <Box margin="10px">
          <AccountBoxIcon className={classes.accountBoxIcon}/>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
