/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/mytags/MyTextField.js
 * Key Options:
 * -
 * Revision History:
 * - Feb 7, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created and updated MyTextField components
 */
import React from "react";
// material-ui core 
import {Box,
        TextField,
        }from "@material-ui/core";
// material-ui style
import {withStyles} from "@material-ui/styles";
const styles = {
    root: {
        '& label':{
          color: "#304ffe",
        },
        '& label.Mui-focused': {
          color: "#fff",
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: "#304ffe",
          },
          '&:hover fieldset': {
            borderColor: "#4a64f8",
          },
          '& input': {
            color: "#fff",
            marginTop: "0.3vh"
          }
        },
    },
};
function MyTextField(prop) {
    const {classes} = prop;
    return (
        <Box>
            <TextField
                className={classes.root}
                variant= {prop.variant}
                margin= {prop.margin}
                required={prop.required}
                fullWidth={prop.fullWidth}
                id={prop.id}
                label={prop.label}
                autoComplete={prop.autoComplete}
                InputProps={prop.InputProps}
                autoFocus={prop.autoFocus}
                type={prop.type}>
            </TextField>
        </Box>
    )
}

export default withStyles(styles)(MyTextField)
