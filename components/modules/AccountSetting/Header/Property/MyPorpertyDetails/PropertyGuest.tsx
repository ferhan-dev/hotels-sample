import React from 'react';
import { Box, Typography, Avatar } from "@material-ui/core";
import { useStyles } from "./styles";
import AppDivider from 'src/components/elements/Divider';


const PropertyGuest = (props: any) => {
    const classes = useStyles();
    return (
        <React.Fragment>
        <Box className={classes.PricingBoxHeading}>
        <Box className={classes.pricing}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="h6" className={classes.photosTitle}>What number can guest use for support?</Typography>
                <Box display="flex" alignItems="center" onClick={() => props.setEditvalue("What number can guest use for support?")}>
                  <Avatar src={"/images/edit.png"} className={classes.editIcon}/>
                  <Typography className={classes.editTitle}>  Edit </Typography>
                </Box>
              </Box>
        </Box>
        <br />
        <Typography variant="h4" className={classes.GrayColor} style={{fontSize: "15px"}}>+1 613-555-0194</Typography>
        <br />
        <br />
        </Box>
        <AppDivider />
{/* __________________________________________________________________________________________________________________________*/}

<Box className={classes.GuestReceptionHeading}>
        <Box className={classes.pricing}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="h6" className={classes.photosTitle}> Guest's Reception </Typography>
                <Box display="flex" alignItems="center" onClick={() => props.setEditvalue("Guest's Reception")}>
                  <Avatar src={"/images/edit.png"} className={classes.editIcon}/>
                  <Typography className={classes.editTitle}>  Edit </Typography>
                </Box>
              </Box>
        </Box>
        <Box className={classes.GuestReceptionDiv}>
        <Box className={classes.flexColumn}>
            <Typography variant="h5">Wifi</Typography>
            <Box className={classes.flexRowWithoutMarginBottom}>
            <Box className={classes.WifiRow}>
                <Typography variant="caption"><strong> INTERNET TYPE </strong></Typography>
            </Box>
            <Box className={classes.BookingPreference2}>
                <Typography variant="caption">Cable</Typography> <br />
            </Box>
            </Box>

            <Box className={classes.flexRowWithoutMarginBottom}>
            <Box className={classes.WifiRow}>
                <Typography variant="caption"><strong> WIFI ACCESS </strong></Typography>
            </Box>
            <Box className={classes.BookingPreference2}>
               <img src="/images/YesFill.png" height="13px"></img>
            </Box>
            </Box>

            <Box className={classes.flexRowWithoutMarginBottom}>
            <Box className={classes.WifiRow}>
                <Typography variant="caption"><strong> WIFI NETWORK NAME</strong></Typography>
            </Box>
            <Box className={classes.BookingPreference2}>
                <Typography variant="caption">FiberHGW_TP5A3E</Typography> <br />
            </Box>
            </Box>

            <Box className={classes.flexRowWithoutMarginBottom}>
            <Box className={classes.WifiRow}>
                <Typography variant="caption"><strong> WIFI PASSWORD</strong> </Typography>
            </Box>
            <Box className={classes.BookingPreference2}>
                <Typography variant="caption">JDFHIECLO35465768YGUBN</Typography> <br />
            </Box>
            </Box>
        </Box>
        <br />
        </Box>
        <Box className={classes.GuestReceptionDiv}>
        <Box className={classes.flexColumn}>
            <Typography variant="h5">Property guide</Typography>
            <Box className={classes.flexRowWithoutMarginBottom}>
            <Box className={classes.WifiRow}>
                <Typography variant="caption"><strong> GUIDE FILE </strong></Typography>
            </Box>
            <Box className={classes.BookingPreference2}>
                <Typography variant="caption">Guide_name_01_2021.pdf</Typography> <br />
            </Box>
            </Box>

            <Box className={classes.flexRowWithoutMarginBottom}>
            <Box className={classes.WifiRow}>
                <Typography variant="caption"><strong> Automatic recording </strong></Typography>
            </Box>
            <Box className={classes.BookingPreference2}>
                <Typography variant="caption">Smart lock</Typography> <br />
            </Box>
            </Box>
            <br />
        </Box>
        </Box>
 </Box>
        </React.Fragment>
    )
}

export default PropertyGuest
