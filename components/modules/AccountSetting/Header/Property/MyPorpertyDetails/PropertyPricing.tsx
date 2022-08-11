import React from 'react'
import { Box, Typography, Avatar } from "@material-ui/core";
import { useStyles } from "./styles";
import AppDivider from 'src/components/elements/Divider';



const PropertyPricing = (porps: any) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.PricingBoxHeading}>
            <Box className={classes.pricing}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" className={classes.photosTitle}> Rental parameters </Typography>
                    <Box display="flex" alignItems="center" style={{cursor: "pointer"}} onClick={() => porps.setEditvalue("Rental parameters")}>
                      <Avatar src={"/images/edit.png"} className={classes.editIcon}/>
                      <Typography className={classes.editTitle}>  Edit </Typography>
                    </Box>
                  </Box>
            </Box>
            <Box className={classes.ReservationRequest}>
                <Box className={classes.flexRow}>
                <Box className={classes.BookingPreference}>
                    <Typography variant="caption"> BOOKING PREFERENCE </Typography>
                </Box>
                <Box className={classes.BookingPreference2}>
                    <Typography variant="caption"><strong> Reservation request </strong></Typography> <br />
                    <Typography variant="caption"> Your guest will have to make a request reservation before booking. </Typography>
                </Box>
                </Box>
                <Box className={classes.flexRow2}>
                <Box className={classes.ArrivingTime}>
                <Typography variant="caption" className={classes.BookingPreference3}> ARRIVING TIME </Typography>
                <Typography variant="caption" style={{marginLeft: "15px"}}><strong> 17:00 </strong></Typography>
                </Box>
                <Box style={{height: "30px"}}>
                <Typography variant="caption" className={classes.BookingPreference3}> DEPARTURE TIME </Typography>
                <Typography variant="caption" style={{marginLeft: "15px"}}><strong> 11:00</strong></Typography>
                </Box>
                </Box>
            </Box>
            <Box className={classes.ReservationRequest}>
                <Box className={classes.stayLength}>
                <Typography variant="h6" > Stay Length</Typography>
                <Box style={{display: "flex", flexDirection: "row", paddingTop: "5px"}}>
                <Typography variant="caption" className={classes.GrayColor}> MIN. NUMBER OF NIGHTS</Typography>
                <Typography variant="caption"> 1</Typography>
                </Box>
                </Box>
                <Box className={classes.stayLength2} style={{display: "flex", flexDirection: "row"}}>
                <Typography variant="caption" className={classes.GrayColor}> MAX. NUMBER OF NIGHTS</Typography>
                <Typography variant="caption"> 30</Typography>
                </Box>
            </Box>
            <br />
            <Typography variant="h6" > Advance Booking Options</Typography>
            <br />
            </Box>
            <AppDivider />
{ /*_______________________________________________________________________________________________________________________________*/ }
            <Box className={classes.PricingBoxHeading}>
            <Box className={classes.pricing}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" className={classes.photosTitle}> Basic Pricing </Typography>
                    <Box display="flex" alignItems="center" style={{cursor: "pointer"}} onClick={() => porps.setEditvalue("Basic Pricing")}>
                      <Avatar src={"/images/edit.png"} className={classes.editIcon} />
                      <Typography className={classes.editTitle}>  Edit </Typography>
                    </Box>
                  </Box>
            </Box>
            <Box className={classes.ReservationRequest2}>
                <Box className={classes.flexRow3}>
                <Box className={classes.BookingPreference}>
                    <Typography variant="caption"> CURRENCY </Typography>
                </Box>
                <Box className={classes.BookingPreference2}>
                    <Typography variant="caption"> $CA (Dollar canadians) </Typography>
                </Box>
                </Box>
                <Box className={classes.flexRow2}>
                <Box className={classes.Rates1}>
                <Typography variant="caption" className={classes.BookingPreference3}> BASE RATE </Typography>
                <Typography variant="caption" style={{marginLeft: "15px"}}><strong> 435$CA</strong></Typography>
                </Box>
                <Box className={classes.Rates1}>
                <Typography variant="caption" className={classes.BookingPreference3}> WEEKEND RATE </Typography>
                <Typography variant="caption" style={{marginLeft: "15px"}}><strong> 755$CA</strong></Typography>
                </Box>
                <Box className={classes.Rates1}>
                <Typography variant="caption" className={classes.BookingPreference3}> WEEKLY RATE </Typography>
                <Typography variant="caption" style={{marginLeft: "15px"}}><strong> 3000$CA</strong></Typography>
                </Box>
                <Box style={{ height: "30px", width: "180px"}}>
                <Typography variant="caption" className={classes.BookingPreference3}> MONTHLY RATE </Typography>
                <Typography variant="caption" style={{marginLeft: "15px"}}><strong> 13,000$CA</strong></Typography>
                </Box>
                </Box>
            </Box>
            <br />
            </Box>
            <AppDivider />
{ /*_______________________________________________________________________________________________________________________________*/ }
            <Box className={classes.PricingBoxHeading}>
            <Box className={classes.pricing}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" className={classes.photosTitle}> Basic Fee </Typography>
                    <Box display="flex" alignItems="center" style={{cursor: "pointer"}} onClick={() => porps.setEditvalue("Basic Fee")}>
                      <Avatar src={"/images/edit.png"} className={classes.editIcon}/>
                      <Typography className={classes.editTitle}>  Edit </Typography>
                    </Box>
                  </Box>
            </Box>
            <Box className={classes.ReservationRequest3}>
                <Box className={classes.BasicFee}>
                <Box className={classes.cleaningfee}>
                <Typography variant="caption" className={classes.BookingPreference3}> CLEANING FEE </Typography>
                <Typography variant="caption" style={{marginLeft: "22px"}}> <strong>435$CA</strong></Typography>
                </Box>
                <Box style={{ height: "30px", width: "200px"}}>
                <Typography variant="caption" className={classes.BookingPreference3}> SECURITY DEPOSITE </Typography>
                <Typography variant="caption" style={{marginLeft: "15px"}}> <strong>755$CA</strong></Typography>
                </Box>
                </Box>
            </Box>
            <Box className={classes.ReservationRequest}>
                <Box className={classes.stayLength}>
                <Typography variant="h6" > Additional guest fee</Typography>
                <Box style={{display: "flex", flexDirection: "row", paddingTop: "5px"}}>
                <Typography variant="caption" className={classes.GrayColor} style={{width: "30%"}}> ABOVE THIS NUMBER OF GUESTS</Typography>
                <Typography variant="caption"> 1</Typography>
                </Box>
                </Box>
                <Box className={classes.stayLength2} style={{display: "flex", flexDirection: "row"}}>
                <Typography variant="caption" className={classes.GrayColor} style={{width: "45%"}}> CHARGE THIS ADDITIONAL AMOUNT PER GUEST PER NIGHT</Typography>
                <Typography variant="caption"> 150 $CA</Typography>
                </Box>
            </Box>
            <Box className={classes.ReservationRequest}>
                <Box className={classes.stayLength}>
                <Typography variant="h6" > Special service charges</Typography>
                <Box style={{display: "flex", flexDirection: "row", paddingTop: "5px"}}>
                <Typography variant="caption" className={classes.GrayColor}>SERVICE NAME</Typography>
                <Typography variant="caption"> CAD($CA)</Typography>
                <Typography variant="caption" className={classes.GrayColor} style={{marginLeft: "50px"}}> By night</Typography>
                </Box>
                </Box>
                <Box style={{display: "flex", flexDirection: "row", paddingTop: "5px", marginLeft: ""}} className={classes.stayLength2}>
                <Typography variant="caption" className={classes.GrayColor}>SERVICE NAME</Typography>
                <Typography variant="caption"> CAD($CA)</Typography>
                <Typography variant="caption" className={classes.GrayColor} style={{marginLeft: "50px"}}> Fixed</Typography>
                </Box>
            </Box>
            <br />
            </Box>

        </React.Fragment>
    )
}

export default PropertyPricing
