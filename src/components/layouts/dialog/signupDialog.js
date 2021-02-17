/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/layouts/termsConditionsPrivacyPolicy.js
 * Key Options:
 * -
 * Revision History:
 * - Feb 17, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created and added title, content for terms&condi and privacy policy
 */
import React from 'react'
import {Box,
        Typography,
        Avatar
        } from "@material-ui/core";
// material-ui style
// icons
import proudtaleLogo from "../../../assets/icons/proudtalelogo.png";
const styles = {
//   head: {
//     color: "#fff",
//   },
  icon: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.5vh",
  },
  titletext: {
    fontSize:"1.05em",
    fontWeight: "bolder",
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    width: "55px",
    height: "55px"
  },
}
// terms and conditions
  // terms & conditions title
export const termsConditionsTitle = (
  <Box>
    <Box style={styles.icon}>
      <Avatar src={proudtaleLogo} style={styles.avatar}/>
    </Box>
    <Typography variant="body1" style={styles.titletext}>
      Terms & Conditions
    </Typography>
  </Box>
)
  // terms & conditions content
export const termsConditionsContent= (
    <Box>
      <Typography gutterBottom>
        Terms & Conditions Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </Typography>
      <Typography gutterBottom>
        Terms & Conditions Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
        lacus vel augue laoreet rutrum faucibus dolor auctor.Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
        lacus vel augue laoreet rutrum faucibus dolor auctor.
      </Typography>
      <Typography gutterBottom>
        Terms & Conditions Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </Typography>
    </Box>
)
// terms and conditions
  // terms & conditions title
export const privacyPolicyTitle = (
  <Box>
    <Box style={styles.icon}>
      <Avatar src={proudtaleLogo} style={styles.avatar}/>
    </Box>
    <Typography variant="body1" style={styles.titletext}>
      Privacy Policy
    </Typography>
  </Box>
)
export const privacyPolicyContent = (
  <Box>
    <Typography gutterBottom>
      Privacy Policy Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </Typography>
    <Typography gutterBottom>
      Privacy Policy Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
      lacus vel augue laoreet rutrum faucibus dolor auctor.
    </Typography>
    <Typography gutterBottom>
      Privacy Policy Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
      auctor fringilla.
    </Typography>
  </Box>
)