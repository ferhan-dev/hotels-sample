import { Box, makeStyles, Typography , Backdrop, IconButton } from "@material-ui/core";
import React, {useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    [breakpoints.between(760,790)]: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    alignSelf: "inherit",
    flexDirection: "column",
    position: "relative",
    width: "100%",
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
    [breakpoints.down(426)]: {
      marginTop: "285px",
    },
  },

  imgSize: {
    // height: "134px",
    borderRadius: "15px",
  },

  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: " 16px",
    [breakpoints.down(426)]: {
      display: "flex",
      flexDirection: "column",
     },
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
    width: "100%"
  },

  mobileHandel: {
    [breakpoints.down(426)]: {
     display: "flex",
     flexDirection: "column",
     marginTop: "-175px",

    },
  },

  backdropfunctionalityContainer: {
    alignItems: 'center', justifyContent: "space-between", width: "560px", display: "flex",
    [breakpoints.down(426)]: {
        width: "100%",
        marginLeft: "0% !important"
       },

       [breakpoints.up(1023)]: {
        marginLeft: "65% !important"
       },
       [breakpoints.up(767)]: {
        marginLeft: "55%"
       },
       [breakpoints.up(1043)]: {
        marginLeft: "75% !important"
       },
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

  disableButton: {
    display: "none",
  },
  backForwardIcon: {
    backgroundColor: "#fff",
    color: "#2E3543",
    alignItems: 'center',
    fontWeight: 'bold',
    padding: '20px',
    borderRadius: "50%",
    width: "5px",
    height: "5px",
    // marginLeft: "-50px",
    // marginRight: "-70px",
    "&:hover": {
      backgroudColor: "#fff"
    }
  },

  cardSubHeading: {
    margin: "0", color: "#5A6987", fontWeight: "normal"
  },

  backdropImagesContainer: {
    width: "100%",
    height: 'auto',
    display: "flex",
  },

  imgMarginBottom: {
    marginBottom: "15px"
  },

  countset: {
  width: "40px",
  background: "rgba(9, 15, 27, 0.64)",
  borderRadius:"24px",
  zIndex: 999999999,
  textAlign: "center",
  top: "-38px",
  left: "85%",
  right: "10px",
  position: "relative",
  color: "white",
  fontSize: "12px",
  font: "inter",
  [breakpoints.up(426)]: {
    left: "93%",
   },
  },

  dFlex: {
    display: 'flex',
    flexDirection: "column"
  },

  CardDescription: {
    color:" #5A6987",
    overflowWrap: "break-word",
    width: "320px",
    [breakpoints.down(321)]: {
    overflowWrap: "break-word",
    width: "250px",
    },
  },

  cardMainHeading: {
    marginLeft: "12px",
    fontWaight: "bold",
    color: "#000"
  },

  Border: {
   
  },
  marginLeft: {
    [breakpoints.down(426)]: {
        marginLeft: "20px"     
    },
    [breakpoints.down(321)]: {
        marginLeft: "10px"     
    },
  },

  dispalyFlex: {
      display: "flex",
      flexDirection: "row"
  },

  grayColor: {
      color: "#5A6987",
  },

  blackColor: {
      color: "black"
  },

  ImageSizes: {
    width: "100%", height: "200px",
    [breakpoints.between(426, 770)]: {
      height: "500px !important",
     },
     [breakpoints.up(424)]: {
      height: "300px",
     },
     [breakpoints.up(374)]: {
      height: "250px",
     },
  },

  backdropImages: {
    width: 550,
    height: 'auto',
    borderRadius: 30,
    // objectFit: 'contain'
  }

}));


const Map = (props: any) => {
  const classes = useStyles();

  useEffect(() => {
    // @ts-ignore
      var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });

  }, [])

  

  const handleClose = () => {
    props.setDescription(false);
  }



  return (
<>
    <Box className={classes.wrappper}>
    <Backdrop className={classes.backdrop} open={props.description} >
      <Box className={classes.backdropfunctionalityContainer}>
        <Box style={{height: "100vh", width:"800px", background: "white"}}>
          <Box style={{marginLeft: "20px", marginTop: "10px", marginRight: "20px"}}>
            <Box style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
          <Typography variant="h5" style={{color: "black", marginLeft: "-100px" }}> Location </Typography><br />
          <IconButton onClick={handleClose} style={{marginLeft: "80px"}}>
          <CloseIcon />
          </IconButton>
          </Box>
          <Typography className={classes.grayColor} style={{marginTop: "-10px"}}>Canada, Quebec</Typography>
          <AppDivider />
          <br />
          </Box>
          <Box className={`${classes.Border}`} id="googleMap" style={{ overflowY: "scroll", height: "90vh"}}>

         </Box>
        </Box>
        
      </Box>
    </Backdrop>
  </Box>



</>
  );
};

export default Map;
