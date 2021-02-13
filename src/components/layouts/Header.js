/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/layouts/Header.js
 * Key Options:
 * -
 * Revision History:
 * - Jan 18, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 * - Jan 27, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : updated header Image
 * - Feb 10, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : updated random header images
 */
import React from "react";
// material-ui core
import {Box} from "@material-ui/core";
// material-ui style
import {makeStyles} from "@material-ui/styles";
// components
import {randomPicture} from "../../util/util";
// images
import header_image_typewriter from "../../assets/images/header-image-typewriter.jpg";
import header_image_bookstore from "../../assets/images/header-image-bookstore.jpg";
import header_image_iamartist from "../../assets/images/header-image-iamartist.jpg";
import header_image_webtoon from "../../assets/images/header-image-webtoon.jpg";
const headerImage = [
  {image:header_image_typewriter},
  {image:header_image_bookstore},
  {image:header_image_iamartist},
  {image:header_image_webtoon}]
const useStyles = makeStyles({
  root: {
    margin: "0",
    padding: "0",
  },
  headerImage1: {
    backgroundSize:"cover",
    backgroundImage: `url(${headerImage[randomPicture(headerImage)].image})`,
    backgroundPosition: "center",
    height: "55vh",
    objectFit: "contain",
  },
  headerFadeBottom: {
    height: "7.4vh",
    backgroundImage: "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)",
    marginTop: "-7vh"
  }
})
function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.headerImage1}/>
      <Box className={classes.headerFadeBottom}/>
    </Box>
  )
}

export default Header
