/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/views/Navbar.js
 * Key Options:
 * -
 * Revision History:
 * - Jan 18, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 * - Jan 18, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : updated styles
 */
import React, {useState, useEffect} from "react";
// material-ui core 
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
// material-ui icons
import AccountBoxIcon from "@material-ui/icons/AccountBox";
// images
const useStyles = makeStyles({
  root:{
    fontSize: "1.5em",
  },
  logo: {
    padding: "2px",
    width: "8vw",
    height: "8vh"
  },
  accountBoxIcon: {
    fontSize: "2em"
  },
  navIndigo: {
    background:"#0d0827",
    transitionTimingFunction: "ease-in",
    transition: "all 0.5s",
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
      <Box className={ prop.scroll && show?classes.navIndigo:null} display="flex" justifyContent="space-between" zIndex="1" width="100%" top="0" position={prop.position}>
        <Box margin="5px" color="yellow" padding="7px">
          PROUDTALE
        </Box>
        <Box margin="10px" paddingTop="8px">
          <AccountBoxIcon className={classes.accountBoxIcon}/>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
