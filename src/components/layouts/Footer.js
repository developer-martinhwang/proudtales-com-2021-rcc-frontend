/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/layouts/Footer.js
 * Key Options:
 * -
 * Revision History:
 * - Jan 18, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 * - Jan 28, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : updated footer
 * - Feb 2, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : implemented codes to apply css styles in makeStyles()
 *     using props from parent component
 * - Feb 5, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : added <Link to="\">
 */
import React from "react";
import {Link as ReactLink} from "react-router-dom";
// material-ui core
import {Box, Typography, List, ListItem, Link} from "@material-ui/core";
// material-ui styles
import {makeStyles} from "@material-ui/styles";
// material-ui icons
import {Email,
        Facebook,
        Instagram,
        Twitter,
        LinkedIn,
        AccountBox,
        Home,
        QuestionAnswer,
        Description} from "@material-ui/icons";
const useStyles = makeStyles({
  root: {
    background: prop => prop.background,
    marginTop: prop => prop.marginTop,
    padding: "2em",
    paddingTop: "4em",
    borderTop: prop => prop.borderTop
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: "-15px",
    marginLeft: "-15px",
    justifyContent: "center",
  },
  col: {
    fontSize: "1.2rem",
    position: "relative",
    width: "28%",
    paddingRight: "15px",
    paddingLeft: "15px",
    '@media screen and (max-width: 960px)': {
      width: "100%",
      marginBottom: "20px"
    }
  },
  listItem: {
    paddingLeft: "0",
  },
  link: {
    marginLeft: "0.2vw",
    padding: "0.3vh 0 0 0.2vw",
    color: "#304ffe",
    textDecoration: 'none'
  },
  copyright: {
    fontSize:"0.95rem",
    "& span":{
      color: "#304ffe"
    }
  }
});
function Footer(prop) {
  const classes = useStyles(prop);
  return (
    <Box className={classes.root}>
      <Box className={classes.row}>
        <Box className={classes.col}>
          <Typography variant="h5">Follow proudtale</Typography>
          <List>
            <ListItem className={classes.listItem}>
               <LinkedIn /> <Link className={classes.link} href="#">LinkedIn</Link>
            </ListItem>
            <ListItem className={classes.listItem}>
               <Facebook /> <Link className={classes.link} href="#">Facebook</Link>
            </ListItem>
            <ListItem className={classes.listItem}>
               <Instagram /> <Link className={classes.link} href="#">Instagram</Link>
            </ListItem>
            <ListItem className={classes.listItem}>
               <Twitter /> <Link className={classes.link} href="#">Twitter</Link>
            </ListItem>
          </List>
        </Box>
        <Box className={classes.col}>
          <Typography variant="h5">Proudtale</Typography>
          <List>
            <ListItem className={classes.listItem}>
               <Home /> <ReactLink className={classes.link} to="/">Home</ReactLink>
            </ListItem>
            <ListItem className={classes.listItem}>
               <AccountBox /> <ReactLink className={classes.link} to="/authentication/login">Log in</ReactLink>
            </ListItem>
            <ListItem className={classes.listItem}>
               <QuestionAnswer /> <ReactLink className={classes.link} to="#">FAQ</ReactLink>
            </ListItem>
            <ListItem className={classes.listItem}>
               <Description /> <ReactLink className={classes.link} to="#">Terms & Conditions</ReactLink>
            </ListItem>
          </List>
        </Box>
        <Box className={classes.col}>
          <Typography variant="h5">Contact proudtale</Typography>
          <List>
            <ListItem className={classes.listItem}>
               <Email /> <Link className={classes.link} href="mailto:operations@proudtale.com">operations@proudtale.com</Link>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box className={classes.row} paddingTop="20px">
        <Typography className={classes.copyright} variant="body1">Copyright &copy; {new Date().getFullYear()}, All Right Reserved <Link component="span">Proudtale</Link></Typography>
      </Box>
    </Box>
  )
}

export default Footer
