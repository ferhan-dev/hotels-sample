import React from 'react';
import {Box, Typography } from "@material-ui/core";
import CalendarHead from 'src/components/modules/Calendar/Head';
import CalendarBody from 'src/components/modules/Calendar/Body';
import CalendarNavbar from 'src/components/modules/Calendar/Navbar';
import AppDivider from 'src/components/elements/Divider';
import AppButton from "src/components/elements/Button";
import AppSelect from "src/components/elements/Select";
import AddIcons from "src/components/elements/icons/Add";
import theme2, { useStyles } from "./styles";
import { ThemeProvider } from '@material-ui/styles'
import {MonthlyOptions} from "./data"



const PropertyCalender = ( {setEditvalue} : any) => {
    const [value, setValue] = React.useState("");
    const classes = useStyles();
    return (
        <React.Fragment>
        <Box className={classes.PricingBoxHeading}>
        <Box className={classes.ProCalendarButton}>
        <Box className={classes.ProCalendarButton2}>
        <AppSelect
          name="type"
          placeholder="Choose one"
          options={MonthlyOptions}
          value={value}
          onChange={(e) => setValue(e.target.value as string)}
        />
        <Box className={classes.CalendarButton} >
            <AppButton variant="outlined" className= {classes.InsideButton}>2021 <span style={{marginLeft: "40px"}}><img src="/images/arrowDown.png"/></span></AppButton>  
        </Box>
        </Box>
        <Box className={classes.ProCalendarButton2}>
        <Box className={`${classes.CalendarButton} ${classes.mobileBlock}`}>
            <AppButton variant="outlined" className= {classes.InsideButton}>Set Specific Pricing <span style={{marginLeft: "40px"}}><img src="/images/arrowDown.png"/></span></AppButton>  
        </Box>
        <Box className={`${classes.CalendarButton} ${classes.mobileBlock}`}>
            <AppButton variant="outlined" className= {classes.InsideButton}>Edit External iCals <span style={{marginLeft: "40px"}}><img src="/images/arrowDown.png"/></span></AppButton>  
        </Box>
        <Box className={`${classes.CalendarButton} ${classes.mobileBlock2}`}>
        </Box>
        <Box className={`${classes.CalendarButton} ${classes.mobileBlock2}`}>
        </Box>
        <Box className={`${classes.CalendarButton} ${classes.mobileBlock2}`}>
        </Box>
        <Box className={`${classes.CalendarButton} ${classes.mobileBlock2}`}>
        </Box>
        </Box>
        <Box className={classes.ProCalendarButton2}>
        <Box className= {classes.CalendarButton}>
            <AppButton variant="outlined" className= {classes.InsideButton} style={{width: "110px"}} onClick={()=> setEditvalue("Import")}>Import <span style={{marginLeft: "20px"}}><img src="/images/arrowDown.png"/></span></AppButton>  
        </Box>
        <Box className= {classes.CalendarButton}>
            <AppButton variant="outlined" className= {classes.InsideButton} style={{width: "110px"}} onClick={()=> setEditvalue("Export")}>Export <span style={{marginLeft: "20px"}}><img src="/images/arrowDown.png"/></span></AppButton>  
        </Box>
        </Box>
        </Box>
        < AppDivider/>
        <br />
        <Box style={{justifyContent: "center", width: "100%"}}>
        <Box marginLeft="25%" marginRight="25%">
        <CalendarNavbar
        leftBtn={null}
        rightBtn={null}
        />
        </Box>
            < CalendarHead />
            < CalendarBody />
        </Box>
        </Box>
{/* __________________________________________________________________________________________________________________________*/}
<Box className={classes.PricingBoxHeading} >
        <Box className={classes.pricing} style={{marginBottom: "10px"}}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="h6" className={classes.photosTitle}> External iCals </Typography>
                <AppButton variant="outlined" className= {classes.InsideButton} style={{width: "70px", height: "30px", backgroundColor: "white"}}><span style={{marginRight: "10px"}}><AddIcons/></span> Add </AppButton>  
            </Box>
        </Box>
        <AppDivider />
        <br />
        <Box className={classes.ExternaliCalsMain} >
        <ThemeProvider theme={theme2}>
            <Box className={classes.logoDiv} >
            <img src="/images/airbnb-logo.png" className={classes.ExternaliCalsImg}></img>
            <ThemeProvider theme={theme2}>
            <Typography variant="h5" className={classes.logoDivTypoGraphy}>Airbnb</Typography>
            </ThemeProvider>
            </Box>
        </ThemeProvider>
            <Box className={classes.linkDiv}>
            <ThemeProvider theme={theme2}>
            <Typography variant="h6" className={classes.linkTypography}>https://fr.airbnb.ca/calendar/ical/49477521.ics?s=a7867</Typography>
            </ThemeProvider>
            <Box style={{backgroundColor: "white", height:"90%", borderRadius: "10px", border: "1px solid gray"}}>
                <img src="/images/verticleThreeDots.png" style={{height: "30px", marginTop: "8px" }}/>
            </Box>
            </Box>
        </Box>
        <Box className={classes.ExternaliCalsMain} >
        <ThemeProvider theme={theme2}>
            <Box className={classes.logoDiv} >
            <img src="/images/gampinghub-logo.png" className={classes.ExternaliCalsImg}></img>
            <ThemeProvider theme={theme2}>
            <Typography variant="h5" className={classes.logoDivTypoGraphy}>Gampinghub</Typography>
            </ThemeProvider>
            </Box>
        </ThemeProvider>
            <Box className={classes.linkDiv}>
            <ThemeProvider theme={theme2}>
            <Typography variant="h6" className={classes.linkTypography}>https://fr.glampinghub.ca/calendar/ical/49477521.ics?s=a7867</Typography>
            </ThemeProvider>
            <Box style={{backgroundColor: "white", height:"90%", borderRadius: "10px",border: "1px solid gray"}}>
                <img src="/images/verticleThreeDots.png" style={{height: "30px", marginTop: "8px" }}/>
            </Box>
            </Box>
        </Box>
        <Box className={classes.ExternaliCalsMain} >
        <ThemeProvider theme={theme2}>
            <Box className={classes.logoDiv} >
            <img src="/images/booking-logo.png" className={classes.ExternaliCalsImg}></img>
            <ThemeProvider theme={theme2}>
            <Typography variant="h5" className={classes.logoDivTypoGraphy}>Booking</Typography>
            </ThemeProvider>
            </Box>
        </ThemeProvider>
            <Box className={classes.linkDiv}>
            <ThemeProvider theme={theme2}>
            <Typography variant="h6" className={classes.linkTypography}>https://fr.booking.ca/calendar/ical/49477521.ics?s=a7867</Typography>
            </ThemeProvider>
            <Box style={{backgroundColor: "white", height:"90%", borderRadius: "10px", border: "1px solid gray"}}>
                <img src="/images/verticleThreeDots.png" style={{height: "30px", marginTop: "8px" }}/>
            </Box>
            </Box>
        </Box>
        <Box className={classes.ExternaliCalsMain} >
        <ThemeProvider theme={theme2}>
            <Box className={classes.logoDiv} >
            <img src="/images/vrbo-logo.png" className={classes.ExternaliCalsImg}></img>
            <ThemeProvider theme={theme2}>
            <Typography variant="h5" className={classes.logoDivTypoGraphy}>Vrbo</Typography>
            </ThemeProvider>
            </Box>
        </ThemeProvider>
            <Box className={classes.linkDiv}>
            <ThemeProvider theme={theme2}>
            <Typography variant="h6" className={classes.linkTypography}>https://fr.vrbo.ca/calendar/ical/49477521.ics?s=a7867</Typography>
            </ThemeProvider>
            <Box style={{backgroundColor: "white", height:"90%", borderRadius: "10px", border: "1px solid gray"}}>
                <img src="/images/verticleThreeDots.png" style={{height: "30px", marginTop: "8px" }}/>
            </Box>
            </Box>
        </Box>
        <Box className={classes.ExternaliCalsMain} >
        <ThemeProvider theme={theme2}>
            <Box className={classes.logoDiv} >
            <img src="/images/other-calendar-logo.png" className={classes.ExternaliCalsImg}></img>
            <ThemeProvider theme={theme2}>
            <Typography variant="h5" className={classes.logoDivTypoGraphy2} style={{marginTop: "0px !important"}}>Other Calendar</Typography>
            </ThemeProvider>
            </Box>
        </ThemeProvider>
            <Box className={classes.linkDiv}>
            <ThemeProvider theme={theme2}>
            <Typography variant="h6" className={classes.linkTypography}>https://fr.othercalendar.ca/calendar/ical/49477521.ics?s=a7867</Typography>
            </ThemeProvider>
            <Box style={{backgroundColor: "white", height:"90%", borderRadius: "10px", border: "1px solid gray"}}>
                <img src="/images/verticleThreeDots.png" style={{height: "30px", marginTop: "8px" }}/>
            </Box>
            </Box>
        </Box>
</Box>
        </React.Fragment>
    )
}

export default PropertyCalender
