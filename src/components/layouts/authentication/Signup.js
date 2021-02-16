/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/layouts/authentication/Signup.js
 * Key Options:
 * -
 * Revision History:
 * - Feb 9, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created and duplicated Login code
 * - Feb 9, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : added <MyTextField /> for Name and Confirm Password
 */
import React, {useState, useEffect} from 'react';
import {Link as ReactLink, useLocation} from "react-router-dom";
// material-ui core 
import {Box,
        Typography,
        Button,
        Avatar,
        Grid, 
        InputAdornment,
        IconButton
        } from '@material-ui/core';
// material-ui style
import {makeStyles} from "@material-ui/styles";
// material-ui icons
import {Email, 
        VpnKey,
        Visibility,
        VisibilityOff,
        Person}from "@material-ui/icons";
// components
import MyTextField from "../../mytags/MyTextField";
// icons
import proudtaleLogo from "../../../assets/icons/proudtalelogo.png";
// util
import {checkPassword} from "../../../util/util";
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
function Signup() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  let passwordErrors = null;
  // display password or not
  const showHidePassword = () => {
    setShowPassword(!showPassword);
  }
  // restoration: scroll to top
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  },[pathname])
  const handleChange = (e) => {
    const {id, value} = e.target;
    setUser(prevState => ({
      ...prevState,
      [id]: value
    }));
    console.log(id);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const check = checkPassword(user.password, user.confirmPassword); 
    // console.log(check);
    passwordErrors = check;
    if(check.length === 0){
      const newUser = {
        name: user.name,
        email: user.email,
        password: user.password,
        confrimPassword: user.confirmPassword
      }
      console.log(newUser);
    }else {
      console.log(passwordErrors);
    }
  }
  const showHidePasswordIcon = (showPassword?<Visibility/>:
    <VisibilityOff/>)
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
        <form className={classes.form} onSubmit={handleSubmit}>
        <MyTextField
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          id="name"
          label="Full Name"
          type="text"
          name="name"
          value={user.name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person/>
              </InputAdornment>
            ),
          }}
          autoFocus={true}
          onChange={handleChange}/>
        <MyTextField
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          id="email"
          label="Email"
          type="email"
          name="email"
          value={user.email}
          autoComplete="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email/>
              </InputAdornment>
            ),
          }}
          onChange={handleChange}/>
        <MyTextField 
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          name="password"
          label="Password"
          value={user.password}
          type={showPassword?"text":"password"}
          id="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKey />
              </InputAdornment>
            ),
            endAdornment:(
              <InputAdornment 
                position="end">
                <IconButton
                  aria-label="toogle password visibility"
                  id="showHidePassword"
                  onClick={showHidePassword}>
                  {showHidePasswordIcon}
                </IconButton>
              </InputAdornment>
            )
          }}
          autoComplete="current-password"
          onChange={handleChange}/>
        <MyTextField 
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          name="confirmPassword"
          label="Confirm Password"
          value={user.confirmPassword}
          type={showPassword?"text":"password"}
          id="confirmPassword"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKey/>
              </InputAdornment>
          )}}
          autoComplete="confirm-password"
          onChange={handleChange}/>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.signupbutton}>
          Sign up
        </Button>
        <Box>
          <Grid className={classes.termsconditions}>
            Please Note: By continuing and signing up, you agree to Edureka&apos;s&nbsp;
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
