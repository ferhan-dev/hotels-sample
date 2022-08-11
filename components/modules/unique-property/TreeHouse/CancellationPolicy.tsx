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

  grayColor: {
      color: "#5A6987",
      fontSize: "14px"
  },

  blackColor: {
      color: "black",
      fontSize: "14px"
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

const CancellationPolicy = (props: any) => {
  const classes = useStyles();

  const handleClose = () => {
    props.setDescription(false);
  }

  return (
    <Box className={classes.wrappper}>
      <Backdrop className={classes.backdrop} open={props.description} >
        <Box className={classes.backdropfunctionalityContainer}>
          <Box style={{height: "350px", width:"700px", background: "white", borderRadius: "24px", overflowY: "scroll",}}>
            <Box style={{marginLeft: "20px", marginTop: "10px"}}>
              <Box style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Typography variant="h5" style={{color: "black", }}> Cancellation policy </Typography><br />
            <IconButton onClick={handleClose}>
            <CloseIcon />
            </IconButton>
            </Box>
            <AppDivider style={{marginRight: "15px"}}/>
              <br />
              <Typography variant="h6" className={classes.blackColor}> Flexible </Typography><br />
              <Typography variant="caption" className={classes.blackColor}> You will receive a full refund as long as you cancel at least 24 hours prior to check-in. You will receive a full refund, less the first night, if you cancel within 24 hours of check-in. </Typography><br /><br />
              <Typography variant="caption" className={classes.blackColor}> Any refund will be at the discretion of the host if you cancel after check-in. </Typography>
            </Box>
          </Box>
        </Box>
      </Backdrop>
    </Box>
  );
};

export default CancellationPolicy;
