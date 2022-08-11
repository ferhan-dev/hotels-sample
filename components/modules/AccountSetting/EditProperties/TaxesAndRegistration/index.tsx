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


const TaxesAndRegistrarion: React.FC<Props> = ( porps ) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.personalInfo}>
        <Container className={classes.container}>
          <Box display="flex" alignItems="center" justifyContent="space-between" style={{ paddingBottom: "25px" }}>
            <Box display="flex" alignItems="center" >
              <Avatar src={"/images/leftArrow.png"} className={classes.leftArrow} onClick={() => porps.setEditvalue("")}/>
              <Typography variant="h6">Taxes and registiration</Typography>
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
          <Typography variant="h6">Registration number </Typography>
          <TextField id="outlined-basic" label="Type here" variant="outlined" style={{ borderRadius: "24px", width: "100%", display: "flex", justifyContent: "space-between"}}/>
            <br />
            <Typography variant="caption" style={{fontSize: "15px"}}>If you need to display a license number on your list to operate in your territory, be sure to put it here.</Typography>
            <br /><br />
            <AppDivider />
            <br />
            <Typography variant="h6">Taxes </Typography>
            <Typography variant="caption" style={{fontSize: "15px"}}>Indicate the taxes you wish to add to your base price if you have not already included them in your base price. Ex.: GST, QST, etc.</Typography>
            <br /><br />
            <Box className={classes.SmartPricingMainDiv2} style={{display:"flex", flexDirection:"row", justifyContent: "space-between"}}>
            <Box style={{width:"200%"}}>
            <Typography variant="h6">Tax name </Typography>
            <TextField id="outlined-basic" label="Type here" variant="outlined" style={{ borderRadius: "24px", width: "90%", display: "flex", justifyContent: "space-between"}}/>           
            </Box>
            <Box style={{width:"90%"}}>
            <Typography variant="h6">Tax value </Typography>
            <TextField id="outlined-basic" label="%" variant="outlined" style={{ borderRadius: "24px", width: "90%", display: "flex", justifyContent: "space-between"}}/>           
            </Box>
            </Box>
            <br /><br />
            <AppButton variant="outlined" style={{ borderRadius: "24px", width: "100%", display: "flex"}}> <Typography className={classes.GrayColorOnly}><span className={classes.spanclass} style={{marginRight: "10px",marginTop: "5px"}}><img src="/images/addIcon.png"/></span>Add</Typography> </AppButton>
            <br /><br />
            </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default TaxesAndRegistrarion;
