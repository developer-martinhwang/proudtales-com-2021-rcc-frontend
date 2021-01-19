/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/pages/Greet.js
 * Key Options:
 * -
 * Revision History:
 * - Jan 18, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 */
import React from 'react'
import {Box, Typography} from '@material-ui/core';
// components
import Header from "../views/Header";
function Greet() {
  return (
    <Box className="app">
      <Header className="header">
       {console.log("browser timezone:",new Intl.DateTimeFormat().resolvedOptions().timeZone)}
      </Header>
      <Typography variant="h3">It is Greet</Typography>
    </Box>
  )
}

export default Greet
