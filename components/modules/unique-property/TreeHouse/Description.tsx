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

const Description = (props: any) => {
  const classes = useStyles();

  const handleClose = () => {
    props.setDescription(false);
  }

  return (
    <Box className={classes.wrappper}>
      <Backdrop className={classes.backdrop} open={props.description} >
        <Box className={classes.backdropfunctionalityContainer}>
          <Box style={{height: "600px", width:"800px", background: "white", borderRadius: "24px", overflowY: "scroll",}}>
            <Box style={{marginLeft: "20px", marginTop: "10px", marginRight: "20px"}}>
              <Box style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Typography variant="h5" style={{color: "black", }}> Description </Typography><br />
            <IconButton onClick={handleClose}>
            <CloseIcon />
            </IconButton>
            </Box>
            <AppDivider />
            <Typography style={{color: "black", }}><strong>Place Description</strong></Typography>
            <Typography style={{color: "black", }}>Perfect fit for active people who like to be close to everything. From your apartment, you will have quick access to downtown and the lively neighbourhoods of Griffintown and Saint-Henri.
              <br /><br />
              Just steps away from the prestigious McGill and Concordia Universities, you'll love these bright apartment with breathtaking.</Typography>
              <br />
              <Typography style={{color: "black", }}><strong>Your accomodotion</strong></Typography>
              <Typography style={{color: "black", }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Typography>
              <br />
              <Typography style={{color: "black", }}><strong>Your availabilities</strong></Typography>
              <Typography style={{color: "black", }}>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</Typography>
              <br />
              <Typography style={{color: "black", }}><strong>Other informations</strong></Typography>
              <Typography style={{color: "black", }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</Typography>


            </Box>
          </Box>
        </Box>
      </Backdrop>
    </Box>
  );
};

export default Description;
