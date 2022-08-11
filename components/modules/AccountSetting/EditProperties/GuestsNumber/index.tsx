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
  TextField
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

const GuestNumber: React.FC<Props> = ({ setEditvalue }) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.personalInfo}>
        <Container className={classes.container}>
          <Box display="flex" alignItems="center" justifyContent="space-between" style={{ paddingBottom: "25px" }}>
            <Box display="flex" alignItems="center" >
              <Avatar src={"/images/leftArrow.png"} className={classes.leftArrow} onClick={() => setEditvalue("")}/>
              <Typography variant="h6">What number can guest use for support?</Typography>
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
          <Typography variant="h6">Phone Number </Typography>
          <Box style={{border: "1px solid gray", borderRadius: "24px", display:"flex", flexDirection: "row"}}>
              <img src="/images/icons8-canada-48.png" width="40px" height="40px" style={{marginLeft: "10px", marginTop: "5px"}}/>
              <Box style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width:"90%"}}>
            <TextField id="outlined-basic" label="1+ (552) 580 / 1552"  style={{ marginLeft:"25px", borderRadius: "24px", width: "100%", display: "flex", justifyContent: "space-between"}}></TextField>   
            <Typography style={{marginTop: "13px"}}><strong>Verified</strong> </Typography> 
            <span className={classes.spanclass} style={{marginTop: "15px", marginLeft: "20px"}}><img src="/images/YesFill.png" height="13px"></img></span>
            </Box>
          </Box>       
            <br />
            <Box>
              <Typography className={classes.policyTitle}>
              Can customers use this number to contact you?
              </Typography>
              <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
              <FormControlLabel value="female" control={<StyledRadio />} label="Yes, customers can use this number" className={classes.policyTitle}/>
              <FormControlLabel value="male" control={<StyledRadio />} label="No, add another number for guests" />
              </RadioGroup>
              <br />
              <AppDivider />
              <br />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default GuestNumber;
