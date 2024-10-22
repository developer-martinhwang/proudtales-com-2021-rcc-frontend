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
 * - Jan 30, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : removed previous 3 <Storycard /> created dummydata for <Storycard/>
 *     implemented storyCardDemmy.map((story, index) => {})
 * - Feb 2, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : added props to <Footer />
 */
import React from "react";
// material-ui core 
import {Box} from "@material-ui/core";
// material-ui style
import {makeStyles} from "@material-ui/styles";
// components
import Navbar from "../layouts/Navbar";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Storycard from "../layouts/Storycard";
import Accordioncard from "../layouts/Accordioncard";
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
const storyCardDummy = [
  {title: "Create various your books", 
   subtitle: "Write your fiction, nonfiction, drama, potry and more.",
   image: `${contentimage}`,
  },
  {title: "Read excting web cartoon", 
  subtitle: "Enjoy a type of digital comic books.",
  image: `${webtoonimage}`
  },
  {title: "Collaborate books and cartoon", 
  subtitle: "Create books and cartoon with collaboration",
  image: `${collaboration}`
}]
const accordionDummy = [
  {summary: "What is proudtale?", 
   details: "Proudtale is write and read any books, webtoon and so on",
  },
  {summary: "How much does produtale cost?", 
   details: "Enjoy various genre on your mobile, tablet, laptop without any fee.",
  },
  {summary: "What can I read on proudtale?", 
   details: "Read as much as you want, anytime you want",
}]
function Greet() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Navbar scroll={false} position="absolute"/>
      <Header />
       {console.log("browser timezone:",new Intl.DateTimeFormat().resolvedOptions().timeZone)}
       {storyCardDummy.map((story, index) => (
         <Storycard key={index}
                    index={index}
                    title={story.title} 
                    subtitle={story.subtitle}
                    image={story.image}/>
        ))}
      <Accordioncard items={accordionDummy}/>
      <Footer borderTop="10px solid #303436" 
              marginTop="4em" 
              background="#0d0827"/>
    </Box>
  )
}

export default Greet
