/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/mytags/MyTextField.js
 * Key Options:
 * -
 * Revision History:
 * - Feb 7, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created and updated MyTextField components
 * - Feb 15, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : updated style(if InputAdornment focused change styles)
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
          color: "#fff",
        },
        '& label.Mui-focused': {
          color: "#304ffe",
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: "#fff",
          },
          '&.Mui-focused fieldset': {
            borderColor: "#304ffe",
          },
          '& input': {
            color: "#fff",
            marginTop: "0.3vh"
          },
          "&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root": {
            color: "#304ffe"
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
                type={prop.type}
                onChange={prop.onChange}>
            </TextField>
        </Box>
    )
}

export default withStyles(styles)(MyTextField)
