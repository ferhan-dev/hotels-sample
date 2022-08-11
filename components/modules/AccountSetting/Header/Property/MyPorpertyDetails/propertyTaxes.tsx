import React from 'react';
import { Box, Typography, Avatar } from "@material-ui/core";
import { useStyles } from "./styles";

const propertyTaxes = (props: any) => {
    const classes = useStyles();
    return (
        <React.Fragment>
        <Box className={classes.PricingBoxHeading}>
        <Box className={classes.pricing}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="h6" className={classes.photosTitle}> Taxes and registration </Typography>
                <Box display="flex" alignItems="center" onClick={() => props.setEditvalue("Taxes and registration")}>
                  <Avatar src={"/images/edit.png"} className={classes.editIcon}/>
                  <Typography className={classes.editTitle}>  Edit </Typography>
                </Box>
              </Box>
        </Box>
        <Box className={classes.ReservationRequest}>
            <Box className={classes.flexRow}>
            <Box className={classes.BookingPreference}>
                <Typography variant="caption"> REGISTRATION NUMBER </Typography>
            </Box>
            <Box className={classes.BookingPreference2}>
                <Typography variant="caption">16910105741262064</Typography> <br />
            </Box>
            </Box>
            <Box className={classes.flexRow2}>
            <Typography variant="caption" className={classes.GrayColor}> TAXES </Typography>
            <Box>
            <Typography variant="caption" style={{marginLeft: "15px"}}><strong> GST </strong></Typography>
            <Typography variant="caption" style={{marginLeft: "15px"}}> %3.5 </Typography>
            <Typography variant="caption" style={{marginLeft: "15px"}}><strong> QST </strong></Typography>
            <Typography variant="caption" style={{marginLeft: "15px"}}>%1.5</Typography>
            </Box>
            </Box>
        </Box>
        </Box>
        </React.Fragment>
    )
}

export default propertyTaxes
