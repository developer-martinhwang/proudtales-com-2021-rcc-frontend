/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/views/Footer.js
 * Key Options:
 * -
 * Revision History:
 * - Jan 18, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 */
import React from "react";
// material-ui core
import {Box, Typography} from "@material-ui/core";
// material-ui styles
import {makeStyles} from "@material-ui/styles";
const styles = makeStyles({
  root: {
    background: "yellow",
    width: "100%",
    position: "fixed",
    left: "0",
    bottom: "0"
  }
});
function Footer() {
  const classes = styles();
  return (
    <Box className={classes.root}>
      <Typography variant="h3">It is Footer</Typography>
    </Box>
  )
}

export default Footer
