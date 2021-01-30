/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/pages/Greet.js
 * Key Options:
 * -
 * Revision History:
 * - Jan 18, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 * - Jan 27, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : updated styles, added Navbar, Header, Footer
 * - Jan 29, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : added Storycard
 */
import React from "react";
// material-ui core 
import {Box} from "@material-ui/core";
// material-ui style
import {makeStyles} from "@material-ui/styles";
// components
import Navbar from "../views/Navbar";
import Header from "../views/Header";
import Footer from "../views/Footer";
import Storycard from "../views/Storycard";
// images
import contentimage from "../../assets/images/content-image.png";
import webtoonimage from "../../assets/images/webtoon-image.png";
import collaboration from "../../assets/images/collaboration-image.png";
const useStyles = makeStyles({
  root: {
    margin: "0",
    padding: "0",
    width: "auto"
  }
})
function Greet() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Navbar scroll={false} position="absolute"/>
      <Header />
       {console.log("browser timezone:",new Intl.DateTimeFormat().resolvedOptions().timeZone)}
      <Storycard 
        title="Create various your books"
        subtitle="Write your fiction, nonfiction, drama, potry and more."
        image={contentimage}
        flexDirection="row-reverse"
      />
       <Storycard 
        title="Read excting web cartoon"
        subtitle="Enjoy a type of digital comic books."
        image={webtoonimage}
        flexDirection="row"
      />
      <Storycard 
        title="Collaborate books and cartoon"
        subtitle="Create books and cartoon with collaboration"
        image={collaboration}
        flexDirection="row-reverse"
      />
      <Footer />
    </Box>
  )
}

export default Greet
