import { Box, makeStyles, Backdrop, IconButton, Typography } from "@material-ui/core";
import React from "react";
import CloseIcon from '@material-ui/icons/Close';
import AppDivider from "src/components/elements/Divider";
export const useStyles = makeStyles(({ breakpoints }) => ({
  wrappper: {
    justifyContent: "center",
    display: "flex",
    alignItems: "flex-end",
    alignSelf: "flex-end",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    [breakpoints.up("md")]: {
      maxWidth: "456px",
    },
    [breakpoints.between("md", "lg")]: {
      flexBasis: "50%",
    },
    [breakpoints.down("sm")]: {
      marginTop: "176px",
    },
  },

  button: {
    width: "fit-content",
    borderRadius: "30px",
    position: "absolute",
    background: "#fff",
    top: "275px",
    right: "15px",
    "&:hover": {
      color: "#fff",
    },
    [breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: "88px",
    },
  },

  imgSize: {
    // height: "134px",
    borderRadius: "15px"
  },

  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: " 16px",
  },

  topGap: {
    marginTop: '13px'
  },

  backdrop: {
    zIndex: 3000,
    color: '#fff',
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  backdropfunctionalityContainer: {
    alignItems: 'center', justifyContent: "space-between", width: 760, display: "flex",
    
    [breakpoints.down(769)]: {
      width: "90%",
      height: "50%"
    },
  },

  blackColor: {
    color: "black"
  },

  amenitiesWrapSec: {
    display: "flex",
    justifyContent: "space-between",
    [breakpoints.down(426)]: {
      flexDirection: "column",
    },
  },
  dFlex: {
    display: 'flex',
  },
  checkImg: {
    marginRight: "12px"
  },
  iconButton: {
    backgroundColor: "#fff",
    color: "#2E3543",
    margin: '0px',
    top: '20px',
    left: "auto",
    bottom: "auto",
    right: "20px",
    position: "fixed",
  },
  backForwardIcon: {
    backgroundColor: "#fff",
    color: "#2E3543",
    alignItems: 'center',
    fontWeight: 'bold',
    padding: '20px',
    borderRadius: "50%",
    "&:hover": {
      backgroudColor: "#fff"
    }
  },

  amenitiesWrap: {
    display: "flex",
    flexBasis: "53%"
  },

  backdropImagesContainer: {
    width: 550,
    height: 'auto',
    display: "flex",
    top: "20%",
    borderRadius: 30,
  },

  backdropImages: {
    width: 550,
    height: 'auto',
    borderRadius: 30,
    // objectFit: 'contain'
  }

}));

const Amenities = (props: any) => {
  const classes = useStyles();

  const handleClose = () => {
    props.setDescription(false);
  }

  return (
    <Box className={classes.wrappper}>
      <Backdrop className={classes.backdrop} open={props.description} >
        <Box className={classes.backdropfunctionalityContainer}>
          <Box style={{height: "500px", width:"800px", background: "white", borderRadius: "24px", overflowY: "scroll",}}>
            <Box style={{marginLeft: "20px", marginTop: "10px"}}>
              <Box style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Typography variant="h5" style={{color: "black", }}> Amenities </Typography><br />
            <IconButton onClick={handleClose}>
            <CloseIcon />
            </IconButton>
            </Box>
            <AppDivider />
            <Typography style={{color: "black", }}><strong>Outdoor features</strong></Typography>
            <Box className={classes.amenitiesWrapSec}>
                  <p className={classes.dFlex+ " " + classes.blackColor}><img className={classes.checkImg} src="/images/garbage.png" /> Access to a garage </p>
                  <p className={classes.amenitiesWrap+ " " + classes.blackColor}><img className={classes.checkImg} src="/images/water.png" /> Access to water </p>
            </Box> 
            <Box className={classes.amenitiesWrapSec}>
                  <p className={classes.dFlex+ " " + classes.blackColor}><img className={classes.checkImg} src="/images/beachchairs.png" /> Beach chairs </p>
                  <p className={classes.amenitiesWrap+ " " + classes.blackColor}><img className={classes.checkImg} src="/images/beachfront.png" /> Beachfront </p>
            </Box>
            <Box className={classes.amenitiesWrapSec}>
                  <p className={classes.dFlex+ " " + classes.blackColor}><img className={classes.checkImg} src="/images/dock.png" /> Dock </p>
                  <p className={classes.amenitiesWrap+ " " + classes.blackColor}><img className={classes.checkImg} src="/images/pit.png" /> Fire pit </p>
            </Box> 
            <br />
              <AppDivider />
              <br />
              <Typography style={{color: "black", }}><strong>Sports & Adventures Nearby</strong></Typography>
              <Box className={classes.amenitiesWrapSec}>
                  <p className={classes.dFlex+ " " + classes.blackColor}><img className={classes.checkImg} src="/images/garbage.png" /> Alpine skiing </p>
                  <p className={classes.amenitiesWrap+ " " + classes.blackColor}><img className={classes.checkImg} src="/images/electricboat.png" /> Boating </p>
            </Box> 
            <Box className={classes.amenitiesWrapSec}>
                  <p className={classes.dFlex+ " " + classes.blackColor}><img className={classes.checkImg} src="/images/beachchairs.png" /> Canoeing </p>
                  <p className={classes.amenitiesWrap+ " " + classes.blackColor}><img className={classes.checkImg} src="/images/beachfront.png" /> Basketball </p>
            </Box>
              <br />
              <AppDivider />
              <br />
              <Typography style={{color: "black", }}><strong>Indoor features</strong></Typography>
              <Box className={classes.amenitiesWrapSec}>
                  <p className={classes.dFlex+ " " + classes.blackColor}><img className={classes.checkImg} src="/images/indoor/Airconditioning.png" /> Air conditioning </p>
                  <p className={classes.amenitiesWrap+ " " + classes.blackColor}><img className={classes.checkImg} src="/images/indoor/bedline.png" /> Bed linens </p>
            </Box> 
            <Box className={classes.amenitiesWrapSec}>
                  <p className={classes.dFlex+ " " + classes.blackColor}><img className={classes.checkImg} src="/images/indoor/Dryingmachine.png" /> Drying machine </p>
                  <p className={classes.amenitiesWrap+ " " + classes.blackColor}><img className={classes.checkImg} src="/images/indoor/dvd.png" /> Basketball </p>
            </Box>
            </Box>
          </Box>
        </Box>
      </Backdrop>
    </Box>
  );
};

export default Amenities;
