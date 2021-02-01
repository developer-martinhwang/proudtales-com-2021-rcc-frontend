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
 * - Feb 1, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : Removed <Remove /> <Add /> icons added <ExpandMoreIcon />
 *     updated styles
 */
import React, {useState, useEffect} from 'react'
// material-ui core 
import {Box, Typography, Accordion, AccordionSummary, AccordionDetails} from "@material-ui/core";
// material-ui style
import {makeStyles} from "@material-ui/styles";
// material-ui icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles({
    root: {
        marginTop: "1em",
        padding: "4em 3em 0 3em",
        borderTop: "10px solid #303436",
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
        backgroundColor: "#181a1b",
        '& p': {
            color: "#fff",
            fontSize: "1.3rem",
            fontWeight: "bolder"
        }
    }, 
    details: {
        backgroundColor: "#181a1b",
        '& p': {
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: "bolder"
        }
    },
    icon: {
        color:"#fff"
    }
});
function Accordioncard(prop) {
    const classes = useStyles();
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(prop.items);
    }, [])
    
    return (
        <Box className={classes.root}>
            {items.map((item, index) => (
                <Box className={classes.accordion} key={index}>
                    <Accordion> 
                        <AccordionSummary className={classes.summary}
                                          expandIcon={<ExpandMoreIcon className={classes.icon}/>}>
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
