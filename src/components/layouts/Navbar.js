/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/views/Navbar.js
 * Key Options:
 * -
 * Revision History:
 * - Jan 18, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created and updated styles
 * - Feb 7, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : updated logo
 */
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
// material-ui core 
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
// material-ui icons
import AccountBoxIcon from "@material-ui/icons/AccountBox";
// images
import proudtale from "../../assets/icons/proudtale-white.png";
const useStyles = makeStyles({
  root:{
    fontSize: "1.5em",
  },
  logo: {
    // width: "7vw",
    // height: "6vh",
    margin: "1.5vh 0 0 1vw",
    padding: "1.5vh 0 0 1vw",
    '@media screen and (max-width: 960px)': {
      padding: "2vh 0 0 1vw",
      margin: "2vh 0 0 1vw",
    }
  },
  accountBoxIcon: {
    fontSize: "2em",
    color:"#303436",
    '&:hover': {
      color: "#fff"
    }
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
  }, []);
  return (
    <Box className={classes.root}>
      <Box className={ prop.scroll && show?classes.navIndigo:null} display="flex" justifyContent="space-between" zIndex="1" width="100%" top="0" position={prop.position}>
        <Box className={classes.logo}>
          <img src={proudtale} width="120px"/>
        </Box>
        <Box margin="15px" paddingTop="8px">
          <Link to="/authentication/login">
            <AccountBoxIcon className={classes.accountBoxIcon}/>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
