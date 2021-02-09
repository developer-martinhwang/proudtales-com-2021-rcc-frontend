/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/layouts/authentication/Signup.js
 * Key Options:
 * -
 * Revision History:
 * - Feb 9, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created and duplicated Login code
 */
import React from 'react';
import {Link as ReactLink} from "react-router-dom";
// material-ui core 
import {Box,
        Typography,
        Button,
        Avatar,
        TextField, 
        Grid, 
        InputAdornment
        } from '@material-ui/core';
// material-ui style
import {makeStyles, withStyles} from "@material-ui/styles";
// material-ui icons
import {Email, 
        VpnKey}from "@material-ui/icons";
// icons
import proudtaleLogo from "../../../assets/icons/proudtalelogo.png";
const useStyles = makeStyles({
  root: {
    margin: "0",
    padding: "0",
    width:"100%",
    color: "white"
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
          required={true}
          fullWidth={true}
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
          autoFocus={true}/>
        <MyTextField 
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          name="password"
          label="Password"
          type={showPassword?"text":"password"}
          id="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKey className={classes.logo}/>
              </InputAdornment>
            ),
            endAdornment:(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toogle password visibility"
                  onClick={showHidePassword}>
                  {showHidePasswordIcon}
                </IconButton>
              </InputAdornment>
            )
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
    </Box>
  )
}

export default Signup
