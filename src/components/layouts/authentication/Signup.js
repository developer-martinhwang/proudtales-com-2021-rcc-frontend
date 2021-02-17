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
 * - Feb 16, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : updated validate input value
 * - Feb 16, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : added terms Conditions & privacy policy dialog
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
        IconButton,
        Link
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
import MyDialog from "../../mytags/MyDialog";
import {termsConditionsContent} from "../termsConditionsPrivacyPolicy";
// icons
import proudtaleLogo from "../../../assets/icons/proudtalelogo.png";
// util
import {passwordCheck, 
        passwordConfirmPasswordMatch,
        emailCheck,
        nameCheck} from "../../../util/util";
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
  link: {
    '& span': {
      color: "#fff",
    },
    '&:hover': {
      cursor: "pointer"
    }
  }
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
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: [],
    confirmPassword: ""
  });
  const [dialog, setDialog] = useState({
    termsConditions: false,
    privacyPolicy: false
  })
//restoration
 // scroll to top
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  },[pathname])
  //signup submit
  // display password or hide
  const showHidePassword = () => {
    setShowPassword(!showPassword);
  }
  const handleChange = (e) => {
    const {id, value} = e.target;
    setUser(prevState => ({
      ...prevState,
      [id]: value
    }));
  }
  const showHidePasswordIcon = (showPassword?<Visibility/>:
    <VisibilityOff/>);
  // submit signup form 
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkFN = nameCheck(user.name);
    const checkE = emailCheck(user.email);
    const checkPw = passwordCheck(user.password); 
    const matchPwCpw = passwordConfirmPasswordMatch(user.password, user.confirmPassword);
    setErrors({
      name:checkFN,
      email:checkE,
      password:checkPw,
      confirmPassword:matchPwCpw 
    });
    // before submit validation check: name, email, password, matchPW&confirmPW
    if(checkPw.length === 0 && 
       checkFN === "" &&
       checkE === "" &&
       matchPwCpw === ""){
      const newUser = {
        name:user.name,
        email:user.email,
        password:user.password,
        confrimPassword:user.confirmPassword
      }
      console.log(newUser);
    }else {
      console.log(errors);
    }
  }
//dialog
  // handle dialog open & close
  const handleDialogOpen = (e) => {
    const {id} = e.target.parentElement;
    console.log(id);
    setDialog(prevState => ({
      ...prevState,
      [id]: true
    }))
  }
  const handleDialogClose = () => {
    setDialog({
      termsConditions: false,
      privacyPolicy: false
    })
  }
  
  const termsConditions = (
    <MyDialog
      dialogTitleActive={true}
      dialogActionsActive={true}
      onClose={handleDialogClose}
      open={dialog.termsConditions}
      title="Terms & Conditions"
      dividers={true}
      content={termsConditionsContent}
    />);
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
          label="Name"
          type="text"
          helperText={errors.name}
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
          helperText={errors.email}
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
          helperText={errors.password}
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
          helperText={errors.confirmPassword}
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
            Please Note: By continuing and signing up, you agree to proudtales&apos;s&nbsp;
            <Link id="termsConditions" className={classes.link} onClick={handleDialogOpen}>
              <Box component="span">Terms & Conditions</Box>
            </Link> &nbsp;and&nbsp;
            <Link id="privacyPolicy" className={classes.link}onClick={handleDialogOpen}>
              <Box component="span">Privacy Policy.</Box>
            </Link> 
          </Grid>
          <Grid item className={classes.login}>
            <ReactLink to="/authentication/login">
              Already have an account? Log In
            </ReactLink>
          </Grid>
        </Box>
        </form>
      </Box>
      {termsConditions}
    </Box>
  )
}

export default Signup
