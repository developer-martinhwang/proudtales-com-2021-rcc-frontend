/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/views/Storycard.js
 * Key Options:
 * -
 * Revision History:
 * - Jan 30, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 * - Jan 31, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : implemented material-ui <Accordion />
 */
import React, {useState} from 'react'
// material-ui core 
import {Box, Typography, Accordion, AccordionSummary, AccordionDetails} from "@material-ui/core";
// material-ui style
import {makeStyles} from "@material-ui/styles";
// material-ui icons
import {Remove, Add} from '@material-ui/icons';
const useStyles = makeStyles({
    root: {
        marginTop: "1em",
        padding: "4em 3em 0 3em",
        borderTop: "10px solid white",
        '@media screen and (max-width: 960px)': {
            padding: "4em 0 0 0",
        }
    },
    accordion:{
        padding: "0.7em 0.7em 0 0.7em",
        margin: "0 12.5vw",
        '@media screen and (max-width: 960px)': {
            margin:"0 5vw",
        }
    },
    summary: {
        '& p': {
            fontSize: "1.3rem",
            fontWeight: "bolder"
        }
    }, 
    details: {
        '& p': {
            fontSize: "1.2rem",
            fontWeight: "bolder"
        }
    }
});
function Accordioncard(prop) {
    const classes = useStyles();
    const [accordionExpand, setAccordionExpand] = useState(false);
    const accordionExpandHandle = () => {
        setAccordionExpand(!accordionExpand);
    }
    return (
        <Box className={classes.root}>
            {prop.items.map((item, index) => (
                <Box className={classes.accordion} key={index}>
                    <Accordion onChange={() => {accordionExpandHandle()}}>
                        <AccordionSummary className={classes.summary} 
                                        expandIcon={accordionExpand?<Remove/>:<Add/>}>
                            <Typography variant="body1">{item.summary}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.details}>
                            <Typography variant="body1">{item.details}</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            ))}
        </Box>
    )
}

export default Accordioncard
