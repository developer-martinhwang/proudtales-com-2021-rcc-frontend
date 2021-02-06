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
 *   : updated styles
 */
import React from 'react'
// material-ui core 
import {Box,
        Typography,
        Container,
        Button,
        Checkbox,
        CssBaseline, 
        Avatar,
        TextField, 
        FormControlLabel,
        Grid, 
        Link,
        Paper,
        } from '@material-ui/core';
// material-ui style
import {makeStyles, withStyles} from "@material-ui/styles";
// components
import Footer from "../../views/Footer";
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
  signintext: {
    fontSize:"2em",
    fontWeight: "bolder"
  },
  main: {
    color: "#fff"
  },
  textFiled: {
    backgroundColor: "#fff",
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
  signinbutton: {
    marginTop: "3vh",
    height: "5.5vh"
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
      color:"#868788"
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
        borderColor: '#304ffe',
      },
    }
  }
})(TextField)
function Signin() {
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
              <Typography variant="body1" className={classes.signintext}>
                Sign in
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
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
                  autoComplete="current-password"/>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.signinbutton}>
                  Sign In
                </Button>
                <FormControlLabel 
                  control={<Checkbox value="remember"
                                     color="default"
                                     />}
                  label="Remember me"
                  className={classes.formcontrollabel}/>
                <Box>
                  <Grid className={classes.forgotpassword}>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item className={classes.signupnow}>
                    <Link>
                      {"New to Proudtale? Sign up Now"}
                    </Link>
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

export default Signin
