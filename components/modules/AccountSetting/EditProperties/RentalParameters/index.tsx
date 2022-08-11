import React from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import { useStyles } from "./styles";
import {
  Box,
  Container,
  Avatar,
  Typography,
  Grid,
  RadioGroup,
} from "@material-ui/core";
import AppButton from "src/components/elements/Button";
import AppDivider from "src/components/elements/Divider";
interface Props {
  setEditvalue?: any;
}


function StyledRadio(props: RadioProps) {
  
    return (
      <Radio
        disableRipple
        color="default"
        {...props}
      />
    );
  }

const RentalParameters: React.FC<Props> = ({ setEditvalue }) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.personalInfo}>
        <Container className={classes.container}>
          <Box display="flex" alignItems="center" justifyContent="space-between" style={{ paddingBottom: "25px" }}>
            <Box display="flex" alignItems="center" >
              <Avatar src={"/images/leftArrow.png"} className={classes.leftArrow} onClick={() => setEditvalue("")}/>
              <Typography variant="h6">Rental Parameters</Typography>
            </Box>
            <Box>
                <AppButton variant="contained" style={{backgroundColor: "#1DAF92", borderRadius: "24px", color: "white"}}> Save </AppButton>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box >
        <Grid className={classes.photosGalleryMain}>
          <Grid item xs={11} md={6} lg={5}>
          {/* style={{border: "2px solid"}} */}
            <Box>
              <Typography className={classes.policyTitle}>
                <strong>Booking preferences</strong>
              </Typography>
              <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
              <FormControlLabel value="female" control={<StyledRadio />} label="Reservation request" className={classes.policyTitle}/>
              <Typography>Your guests will have to make a request reservation before booking. <br />(Ideal for those who wish to study each reservation)</Typography>
              <FormControlLabel value="male" control={<StyledRadio />} label="Instant booking" />
              <Typography>If you apply instant booking to your listings, it will make your role easier and more fast, because you will be able to book guests without have to respond to each individual request.
                <br /> <br />
                It will also attract more customers and increase your confirmed reservations. Very important to synchronize your calendars.
                (Ideal for increasing your booking rate)</Typography>
              </RadioGroup>
              <br />
              <AppDivider />
              <br />
              <Typography className={classes.policyTitle}>
                <strong>Arrivals and Departures</strong>
              </Typography>
              <br />
              <Box className={classes.Arrival}>
                  <Box className={classes.ArrivalInside}>
                  <Typography variant="caption" className={classes.MainTypography}><strong>Arriving time</strong></Typography><br />
                  {/* <Box className= {classes.CalendarButton}>    */}
                  <AppButton variant="outlined" className= {classes.InsideButton}>17:00 <span className={classes.spanclass}><img src="/images/arrowDown.png"/></span></AppButton>  
                  <Typography variant="caption" className={classes.GrayColor}>Indicate the expected arrival time of your guests</Typography><br />
                  {/* </Box> */}
                  </Box>
                  <Box className={classes.ArrivalInside}>
                  <Typography variant="caption" className={classes.MainTypography}><strong>Departure time</strong></Typography><br />
                  <AppButton variant="outlined" className= {classes.InsideButton}>17:00 <span className={classes.spanclass}><img src="/images/arrowDown.png"/></span></AppButton>  
                  <Typography variant="caption" className={classes.GrayColor}>Indicate the expected departure time of your guests</Typography><br />
                  </Box>
              </Box>
              <br/> 
              <AppDivider />
              <br/>
              <Typography className={classes.policyTitle}>
                  <strong>Stay Length</strong>
              </Typography>
              <Box className={classes.StayLength}>
                  <Box>
                      <Typography>Minimum number of nights to rent</Typography>
                  </Box>
                  <Box> 
                  <AppButton variant="outlined" className= {classes.InsideButton}>1 <span className={classes.spanclass}><img src="/images/arrowDown.png"/></span></AppButton>  
                  </Box>
              </Box>
              <br />
              <Box className={classes.StayLength}>
                  <Box>
                      <Typography>Maximum number of nights to rent</Typography>
                  </Box>
                  <Box> 
                  <AppButton variant="outlined" className= {classes.InsideButton}>- <span className={classes.spanclass}><img src="/images/arrowDown.png"/></span></AppButton>  
                  </Box>
              </Box>
              <br />
              <AppDivider />
              <br />
              <Box className={classes.StayLength}>
              <Typography className={classes.policyTitle}>
                  <strong>Advanced booking options</strong>
              </Typography>
              <Box> 
                  <AppButton className= {classes.InsideButton}><span className={classes.spanclass}><img src="/images/arrowDown.png"/></span></AppButton>  
              </Box>
              </Box>
              <br /><br />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default RentalParameters;
