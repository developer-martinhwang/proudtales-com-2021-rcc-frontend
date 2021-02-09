/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/pages/Auth.js
 * Key Options:
 * -
 * Revision History:
 * - Feb 7, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 */
import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
// material-ui core 
import {Box,
        Container,
        CssBaseline, 
        Paper,
        } from '@material-ui/core';
// material-ui style
import {makeStyles} from "@material-ui/styles";
// components
import Footer from "../layouts/Footer";
import Signup from "../layouts/authentication/Signup";
import Login from "../layouts/authentication/Login";
import EmailVerification from "../layouts/authentication/EmailVerification";
// images
import headerImage from "../../assets/images/header-image-1st.jpg";
// util
import {getLastWordOfUrl} from "../../util/util"; //return the value of end index in an array of substrings
const useStyles = makeStyles({
  root: {
    margin: "0",
    padding: "0",
    backgroundSize:"cover",
    backgroundImage: `url(${headerImage})`,
    backgroundPosition: "center",
    width:"100%",
    color: "white"
  },
  fade: {
    backgroundColor: "rgba(37, 37, 37, 0.61)",
    width: "100%",
    minHeight: "100vh",
  },
  container: {
    padding: "15vh 4vw 15vh 4vw"
  },
  paper: {
    backgroundColor:"#0d082766",
    minHeight: "40vh",
    padding: "7vh 2vw 10vh 2vw",
    '@media screen and (max-width: 960px)': {
      padding: "7vh 4vw 10vh 4vw",
    }
  },
  footer: {
    marginTop: "none",
  },
})
function Auth(prop) {
  const classes = useStyles();
  const [path, setPath] = useState("");
  // restoration: scroll to top
  const {pathname} = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
      // get end word of url path
      let path = prop.location.pathname;
      path = getLastWordOfUrl(path, "/");
      setPath(path);
    },[pathname]);
  const tagInPaper = (path === "Signup"?<Signup />:
                      path === "Login"?<Login />:
                      path === "Emailverification"?<EmailVerification />:
                      "");
  return (
      <Box className={classes.root}>
      <Box className={classes.fade}>
        <Container className={classes.container} maxWidth="sm">
          <CssBaseline />
          <Paper className={classes.paper}>
            {tagInPaper}
          </Paper>
        </Container>
        <Box>
          <Footer className={classes.footer} background="#0d082766"/>
        </Box>
      </Box>
    </Box>
  )
}

export default Auth
