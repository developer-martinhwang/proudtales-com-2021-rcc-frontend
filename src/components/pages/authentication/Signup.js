/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/forms/Signup.js
 * Key Options:
 * -
 * Revision History:
 * - Feb 6, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created and duplicated Login code
 */
import React from 'react'
import {Link as ReactLink} from "react-router-dom";
// material-ui core 
import {Box,
        Typography,
        Container,
        Button,
        CssBaseline, 
        Avatar,
        TextField, 
        Grid, 
        Paper,
        InputAdornment
        } from '@material-ui/core';
// material-ui style
import {makeStyles, withStyles} from "@material-ui/styles";
// material-ui icons
import {Email, 
        VpnKey}from "@material-ui/icons";
// components
import Footer from "../../layouts/Footer";
// images
import headerImage from "../../../assets/images/header-image-1st.jpg";
// icons
import proudtaleLogo from "../../../assets/icons/proudtalelogo.png";
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
    padding: "7vh 2vw 10vh 2vw",
    '@media screen and (max-width: 960px)': {
      padding: "7vh 4vw 10vh 4vw",
    }
  },
  head: {
    color: "#fff",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "3vh",
    "& img": {
    }
  },
  signuptext: {
    fontSize:"2em",
    fontWeight: "bolder"
  },
  main: {
    color: "#fff"
  },
  textFiled: {
    backgroundColor: "#fff",
  },
  logo: {
    color: "#304ffe",
  },
  signupbutton: {
    margin: "3.5vh 0 2vh 0",
    backgroundColor: "#4a64f8",
    minHeight: "5vh",
    color: "#3619ff",
    "&:hover": {
      backgroundColor: "#304ffe",
      color:"#fff"
    }
  },
  footer: {
    marginTop: "none",
  },
  avatar: {
    width: "55px",
    height: "55px"
  },
  termsconditions: {
    color:"#868788",
    marginTop: "3vh",
    '& a': {
      color:"#868788",
      textDecoration: 'none',
    }
  },
  login: {
    margin: "1vh 0",
    '& a': {
      color:"#868788",
      textDecoration: 'none' 
    }
  },
})
const MyTextField = withStyles({
  root: {
    '& label':{
      color: "#304ffe",
    },
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: "#304ffe",
      },
      '&:hover fieldset': {
        borderColor: "#4a64f8",
      },
      '& input': {
        color: "#fff",
        marginTop: "0.3vh"
      }
    },
  }
})(TextField)

function Signup() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.fade}>
        <Container className={classes.container} maxWidth="sm">
          <CssBaseline />
          <Paper className={classes.paper}>
            <Box className={classes.head}>
              <Box className={classes.icon}>
                <Avatar src={proudtaleLogo} className={classes.avatar}/>
              </Box>
              <Typography variant="body1" className={classes.signuptext}>
                Sign up
              </Typography>
            </Box>
            <Box>
              <form className={classes.form}>
                <MyTextField 
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email className={classes.logo}/>
                      </InputAdornment>
                    ),
                  }}
                  autoFocus/>
                <MyTextField 
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKey className={classes.logo}/>
                      </InputAdornment>
                    ),
                  }}
                  autoComplete="current-password"/>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.signupbutton}>
                  Sign up
                </Button>
                <Box>
                  <Grid className={classes.termsconditions}>
                    Please Note: By continuing and signing up, you agree to Edureka&lsquo;s&nbsp;
                    <ReactLink to="#">
                      <Box component="span" color="#fff">Terms & Conditions</Box>
                    </ReactLink> &nbsp;and&nbsp;
                    <ReactLink to="#">
                      <Box component="span" color="#fff">Privacy Policy.</Box>
                    </ReactLink> 
                  </Grid>
                  <Grid item className={classes.login}>
                    <ReactLink to="/authentication/login">
                      Already have an account? Log In
                    </ReactLink>
                  </Grid>
                </Box>
              </form>
            </Box>
          </Paper>
        </Container>
        <Box>
          <Footer className={classes.footer} background="#0d082766"/>
        </Box>
      </Box>
    </Box>
  )
}

export default Signup
