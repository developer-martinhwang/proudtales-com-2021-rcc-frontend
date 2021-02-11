/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/layouts/authentication/EmailVerification.js
 * Key Options:
 * -
 * Revision History:
 * - Jan 30, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 */
import React from 'react'
// material-ui core 
import {Box,
        Typography,
        Avatar,
        Link
        } from '@material-ui/core';
// material-ui style
import {makeStyles} from "@material-ui/styles";
// icons
import proudtaleLogo from "../../../assets/icons/proudtalelogo.png";
const useStyles = makeStyles({
    root: {
        margin: "0",
        padding: "0",
        width:"100%",
        color: "white"
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
    logo: {
        color: "#304ffe",
    },
    avatar: {
        width: "55px",
        height: "55px"
    },
})
function EmailVerification() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.head}>
                <Box className={classes.icon}>
                <Avatar src={proudtaleLogo} className={classes.avatar}/>
                </Box>
                <Typography variant="body1" className={classes.signuptext}>
                    We&apos;ve&nbsp;sent an email to email.
                    Click the confirmation link in that email to begin using proudtale.
                </Typography>
            </Box>
            <Box>
                <Typography>If you did not receive the email.</Typography>
                <Link href="#" variant="body2"> 
                    Resend another email
                </Link>
            </Box>
        </Box>
    )
}

export default EmailVerification
