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
const useStyles = makeStyles({
  root: {
    margin: "0",
    padding: "0",
    backgroundSize:"cover",
    backgroundImage: `url(${headerImage})`,
    backgroundPosition: "center",
    objectFit: "contain",
    width:"auto",
    color: "white"
  },
  fade: {
    backgroundColor: "rgba(37, 37, 37, 0.61)",
    minHeight: "100vh",
  },
  container: {
    padding: "15vh 4vw 15vh 4vw"
  },
  paper: {
    backgroundColor:"#0d082766",
    padding: "10vh 2vw 25vh 2vw",
    '@media screen and (max-width: 960px)': {
      padding: "10vh 4vw 25vh 4vw",
    }
  },
  head: {
    color: "#fff"
  },
  main: {
    color: "#fff"
  },
  textFiled: {
    backgroundColor: "#fff",
  },
  footer: {
    marginTop: "none",
  }
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
              <Avatar>

              </Avatar>
              <Typography variant="h5">
                Sign in
              </Typography>
            </Box>
            <form className={classes.head}>
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
              <FormControlLabel 
                control={<Checkbox value="remember"/>}
                label="Remember me"/>
              <Button
                type="submit"
                fullWidth
                variant="contained">
                Sign In
              </Button>
              <Grid container>
                <Grid>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link>
                    {"New to Proudtale? Sign up Now"}
                  </Link>
                </Grid>
              </Grid>
            </form>
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
