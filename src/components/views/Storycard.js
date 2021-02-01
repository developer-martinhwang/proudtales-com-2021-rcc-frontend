/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/views/Storycard.js
 * Key Options:
 * -
 * Revision History:
 * - Jan 18, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 * - Jan 29, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : updated styles for responsive
 * - Jan 30, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : removed flexDirection prop and added function for flexDirection
 */
import React from "react";
// material-ui core 
import {Box, Typography} from "@material-ui/core";
// material-ui style
import {makeStyles} from "@material-ui/styles";
const useStyles = makeStyles({
    root: {
        marginTop: "1em",
        padding: "4em 3em 0 3em",
        borderTop: "10px solid #303436",
        '@media screen and (max-width: 960px)': {
            padding: "4em 0 0 0",
        }
    },
    row: {
        display: "flex",
        flexWrap: "wrap",
        padding: "10px",
        justifyContent: "space-evenly",
    },
    col: {
        fontSize: "1.2rem",
        position: "relative",
        width: "28vw",
        padding: "2vw",
        '@media screen and (max-width: 960px)': {
            width: "100%",
            marginBottom: "30px",
            textAlign: "center"
        }
    },
    image: {
        backgroundSize:"contain",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        objectFit: "contain",
        height: "28vh",
        '@media screen and (max-width: 960px)': {
            marginBottom: "30px"
        }
    },
    title: {
        fontSize: "2.7rem",
        fontWeight: "bolder",
        '@media screen and (max-width: 960px)': {
           fontSize: "1.6rem",
           padding: "0",
           margin: "0"
        }
    },
    subtitle: {
        fontSize: "1.5rem",
        paddingLeft: "3px",
        '@media screen and (max-width: 960px)': {
            fontSize: "1rem",
            padding: "0",
            margin: "0"
        }
    }
})
// function:
// if index # even flexDirection row-reverse
// # odd flexDirection row 
const flexDirection = (index) => {
    if (index%2 === 0) {
        return "row-reverse"
    }else {
        return "row"
    }
}
function Storycard(prop) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.row} flexDirection={flexDirection(prop.index)}>
                <Box className={classes.col}>
                    <Box className={classes.image} style={{backgroundImage:`url(${prop.image})`}}></Box>
                </Box>
                <Box className={classes.col}>
                    <Typography className={classes.title}>{prop.title}</Typography>
                    <Typography className={classes.subtitle}>{prop.subtitle}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Storycard
