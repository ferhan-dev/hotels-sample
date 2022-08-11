import { Box, makeStyles, Typography , Backdrop, IconButton } from "@material-ui/core";
import React from "react";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
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
    alignItems: 'center', justifyContent: "space-between", width: 360, display: "flex",
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

const Reviews = [
  {
    id: 1,
    name: "Brianna Roy",
    date: "August 2021",
    description: "Luc's place was very clean and nice to stay at. Great location and I would definitely stay here again. The pictures are accurate.",
    profileUrl: "/images/Image.png"
  },
  {
    id: 2,
    name: "Eren",
    date: "August 2021",
    description: "This place is gorgeous, very clean and best location for the perfect view of downtown. ",
    profileUrl: "/images/Image.png"
  },
  {
    id: 3,
    name: "Erkan",
    date: "August 2021",
    description: "A very comfortable place with a good and convenient location, and a spectacular view of the city. I would stay here again. Also, Yan was a grea...",
    profileUrl: "/images/Image.png"
  },

]

const Review = (props: any) => {
  const classes = useStyles();

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
            <Box style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <Typography variant="h5" style={{color: "black", }}> Review </Typography><br />
          <IconButton onClick={handleClose}>
          <CloseIcon />
          </IconButton>
          </Box>
          <AppDivider />
          <br />
          <Box className={`${classes.Border}`} style={{ overflowY: "scroll", height: "90vh"}}>
    {Reviews.map((items, index) => {
        return(
    <Box key={index} className={`${classes.dFlex} ${classes.marginLeft}`} style={{marginTop: "20px"}}>
        <Box className={classes.dispalyFlex}>
        <img src={items.profileUrl} height="50" width="50" />
        <Typography color="textSecondary" variant="body2" className={classes.cardMainHeading}> {items.name} <p className={classes.cardSubHeading}>{items.date}</p> </Typography>
        </Box>
        <Box>
            <Typography className={classes.blackColor} style={{marginTop: "10px"}}>{items.description}</Typography>
        </Box>
        <Box className={classes.dispalyFlex} style={{marginTop: "10px"}}>
          <StarIcon style={{ color: 'green' }} />
          <StarIcon style={{ color: 'green' }} />
          <StarIcon style={{ color: 'green' }} />
          <StarIcon style={{ color: 'green' }} />
          <StarHalfIcon style={{ color: 'green' }} />
      <Typography color="textSecondary" variant="body2"> <span className={classes.blackColor}>4,5</span><span> (24 Review)</span></Typography>
      </Box>
      <br />
      <AppDivider />
    </Box>
        )
    })}
</Box>
          </Box>
        </Box>
      </Box>
    </Backdrop>
  </Box>



</>
  );
};

export default Review;
