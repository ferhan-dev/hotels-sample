import { Box, makeStyles, Backdrop, IconButton, Typography, Button } from "@material-ui/core";
import dynamic from 'next/dynamic'; 
const ReactInputVerificationCode=dynamic(import ('react-input-verification-code'),{ssr:false});import React from "react";
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

  InputVerificatoin: {
    width: "100%"
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

  TryAgain: {
    display: "flex", flexDirection: "row", marginRight:"30%", marginLeft: "30%",
    [breakpoints.down(426)]: {
      marginRight:"3%", marginLeft: "3%",
    },
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

const VerificationPopUp = (props: any) => {
  const classes = useStyles();

  const handleClose = () => {
    props.setDescription(false);
  }

  return (
    <Box className={classes.wrappper}>
      <Backdrop className={classes.backdrop} open={props.description} >
        <Box className={classes.backdropfunctionalityContainer}>
          <Box style={{background: "white", borderRadius: "24px", overflowY: "scroll", width: "100%", overflowX: "hidden"}}>
            <Box style={{marginLeft: "20px", marginTop: "10px"}}>
              <Box style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Typography variant="h5" style={{color: "black", }}> Enter your security code  </Typography><br />
            <IconButton onClick={handleClose}>
            <CloseIcon />
            </IconButton>
            </Box>
            <AppDivider /><br />
              <Typography variant="caption" style={{color: "#5A6987"}}><strong>We sent the code by SMS to </strong><span style={{color: "#1DAF92"}}>+1 (514) 717-9969</span><br />
                We will send you reservation requests, reminders and other notifications. <br />
                This number should be able to receive text messages or calls.</Typography> 
              <br />
              <Box className={classes.InputVerificatoin}>
              <ReactInputVerificationCode />
              </Box>
              <br />
              <Box style={{width: "100%"}}>
                  <Button variant="outlined" style={{marginRight: "15px", borderRadius: "24px", width: "95%"}}>
                  I prefer to receive a call
                  </Button>
              </Box><br />
              <Box className={classes.TryAgain} style={{}}>
              <Typography style={{color: "black", marginRight: "5px"}}>You did ’t receive it?</Typography><Typography style={{color: "#1DAF92"}}>Try again</Typography>
              </Box><br />
              <Box style={{display:"flex", flexDirection: "row", justifyContent: "flex-end"}}>
                  <Button variant="outlined" style={{marginRight: "15px", borderRadius: "24px", width: "50%"}}>Cancel</Button>
                  <Button variant="outlined" style={{marginRight: "50px", borderRadius: "24px", background: "#1DAF92", color: "white", width: "50%"}}>Confirm</Button>
              </Box>
              
            </Box>
            <br />
          </Box>
        </Box>
      </Backdrop>
    </Box>
  );
};

export default VerificationPopUp;

