/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: rcc-frontend/src/components/mytags/MyDialog.js
 * Key Options:
 * -
 * Revision History:
 * - Feb 17, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 */
import React from "react";
import {Box,
        Dialog,
        DialogTitle,
        DialogContent,
        DialogActions,} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
const style = {
    root: {

    }
};
function MyDialog(prop) {
    return (
        <Box>
            <Dialog onClose={prop.onClose} open={prop.open}>
            {prop.dialogTitleActive?
                <DialogTitle id={prop.id} onClose={prop.onClose}>
                    {prop.title}
                </DialogTitle>
                : null
            }
                <DialogContent dividers={prop.dividers}>
                    {prop.content}
                </DialogContent>
            {prop.dialogActionsActive? 
                <DialogActions>
                    {prop.actions}
                </DialogActions>
                : null
            }
            </Dialog>
        </Box>
    )
}

export default withStyles(style)(MyDialog)
