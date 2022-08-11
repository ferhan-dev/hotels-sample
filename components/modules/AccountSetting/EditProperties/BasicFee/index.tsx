import React from "react";
import { useStyles } from "./styles";
import {
  Box,
  Container,
  Avatar,
  Typography,
  Grid,
  TextField
} from "@material-ui/core";
import AppButton from "src/components/elements/Button";
import AppDivider from "src/components/elements/Divider";
interface Props {
  setEditvalue?: any;
}


const BasicFee: React.FC<Props> = ( porps ) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.personalInfo}>
        <Container className={classes.container}>
          <Box display="flex" alignItems="center" justifyContent="space-between" style={{ paddingBottom: "25px" }}>
            <Box display="flex" alignItems="center" >
              <Avatar src={"/images/leftArrow.png"} className={classes.leftArrow} onClick={() => porps.setEditvalue("")}/>
              <Typography variant="h6">Basic Fee</Typography>
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
          <Typography variant="h6">Cleaning fee </Typography>
          <TextField id="outlined-basic" label="CAD (C$)" variant="outlined" style={{ borderRadius: "24px", width: "100%", display: "flex", justifyContent: "space-between"}}/>
            <br />
            <Typography variant="h6">Security deposit </Typography>
            <TextField id="outlined-basic" label="CAD (C$)" variant="outlined" style={{ borderRadius: "24px", width: "100%", display: "flex", justifyContent: "space-between"}}/>
                <br />
            <AppDivider />
            <br />
            <Box className={classes.SmartPricingMainDiv}>
            <Box style={{marginTop: "10px", marginLeft: "15px"}}>
              <Typography variant="h6">Additional guest fees <span className={classes.GrayColorOnly}> (Optional) </span> </Typography>
              <br />
              <Typography variant="h6">Above this number of guest </Typography>
              <AppButton variant="outlined" style={{ borderRadius: "24px", width: "100%", display: "flex", justifyContent: "space-between"}}> <Typography>3</Typography> <span className={classes.spanclass}><img src="/images/arrowDown.png"/></span></AppButton>  
              <br />
              <Typography variant="h6">Fee per additional guest </Typography>
              <TextField id="outlined-basic" label="CAD (C$)" variant="outlined" style={{ borderRadius: "24px", width: "100%", display: "flex", justifyContent: "space-between"}}/>
              <br />  
            </Box>
            </Box>
            <br />
            <AppDivider />
            <br />
            <Typography variant="h6">Other charges </Typography>
            <Typography variant="caption" className={classes.GrayColorOnly}>Indicate other charges that are specific to your property (ex. pet, breakfast and etc.)</Typography>
            <Box className={classes.SmartPricingMainDiv}>
            <Box style={{marginTop: "10px", marginLeft: "15px"}}>
                <Typography variant="h6"> Service name </Typography>
                <Box className={classes.SmartPricingMainDiv2} style={{display: "flex", justifyContent: "space-between"}}>
                <Typography variant="h6" className={classes.GrayColorOnly}> Service Price ($) </Typography>
                <Box display="flex" alignItems="center" style={{cursor: "pointer"}} onClick={() => porps.setEditvalue("Basic Fee")}>
                      <Avatar src={"/images/edit.png"} className={classes.editIcon}/>
                      <Typography className={classes.editTitle} style={{marginRight: "15px"}}>  Edit </Typography>
                </Box>
                </Box>
            </Box>
            </Box>
            <br />
            <AppButton variant="outlined" style={{ borderRadius: "24px", width: "100%", display: "flex"}}> <Typography className={classes.GrayColorOnly}><span className={classes.spanclass} style={{marginRight: "10px",marginTop: "5px"}}><img src="/images/addIcon.png"/></span>CAD (C$)</Typography> </AppButton>
            <br /><br />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default BasicFee;
