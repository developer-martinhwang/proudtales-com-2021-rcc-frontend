/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/forms/Signin.js
 * Key Options:
 * -
 * Revision History:
 * - Jan 18, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 * - Feb 3, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : updated styles
 *     - created <form> <MyTextField>
 * - Feb 5, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : updated styles added <Link to="\">
 * - Feb 6, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : updated styles and added showPassword state
 * - Feb 7, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : completed showHidePassword()
 * - Feb 8, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : updated restoration: scroll to top
 */
import React, {useState, useEffect} from 'react';
import {Link as ReactLink, useLocation} from "react-router-dom";
// material-ui core 
import {Box,
        Typography,
        Container,
        Button,
        Checkbox,
        CssBaseline, 
        Avatar,
        FormControlLabel,
        Grid, 
        Paper,
        InputAdornment,
        IconButton
        } from '@material-ui/core';
// material-ui style
import {makeStyles} from "@material-ui/styles";
// material-ui icons
import {Email, 
        VpnKey,
        Visibility,
        VisibilityOff
        }from "@material-ui/icons";
// components
import Footer from "../../layouts/Footer";
import MyTextField from "../../mytags/MyTextField";
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
  logintext: {
    fontSize:"2em",
    fontWeight: "bolder"
  },
  formcontrollabel: {
    color: "#fff",
    '& svg': {
      color: "#fff"
    },
    '& span': {
      paddingTop: "5px"
    }
  },
  logo: {
    color: "#304ffe",
  },
  loginbutton: {
    marginTop: "3.5vh",
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
  forgotpassword: {
    marginTop: "3vh",
    '& a': {
      color:"#868788"
    }
  },
  signupnow: {
    margin: "1vh 0",
    '& a': {
      color:"#868788",
      textDecoration: 'none' 
    }
  },
})
function Login() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const showHidePassword = () => {
    setShowPassword(!showPassword);
  }
  // restoration: scroll to top
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowPassword()
  },[pathname])
  const showHidePasswordIcon = (showPassword?<Visibility className={classes.logo}/>:
    <VisibilityOff className={classes.logo}/>)
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
              <Typography variant="body1" className={classes.logintext}>
                Log in
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
                  className={classes.loginbutton}>
                  Log In
                </Button>
                <FormControlLabel 
                  control={<Checkbox value="remember"
                                     color="default"
                                     />}
                  label="Remember me"
                  className={classes.formcontrollabel}/>
                <Box>
                  <Grid className={classes.forgotpassword}>
                    <ReactLink to="#">
                      Forgot password?
                    </ReactLink>
                  </Grid>
                  <Grid item className={classes.signupnow}>
                    <ReactLink to="/authentication/signup" variant="body2">
                      New to Proudtale? Sign up Now
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

export default Login
