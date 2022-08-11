import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    alignItems: 'center', justifyContent: "space-between", width: 760, display: "flex",
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

  backdropImagesContainer: {
    width: "100%",
    height: 'auto',
    display: "flex",
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

const images = [
  {
    id: 1,
    desc: "dsfs",
    url: "/images/regions/quebec.png",
  },
  {
    id: 2,
    desc: "dsfs",
    url: "/images/regions/mauricie.png",
  },
  {
    id: 3,
    desc: "dsfs",
    url: "/images/Rectangle 973.png",
  },
  {
    id: 4,
    desc: "dsfs",
    url: "/images/regions/charlevoix.png",
  },
  {
    id: 5,
    desc: "dsfs",
    url: "/images/Rectangle 972.png",
  }
]

const MobileSlider = () => {
  const classes = useStyles();
  const count = images.length;

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
<Box style={{ overflowX:"hidden"}}>
<Slider {...settings}>
  {images.map((items, index) => {
    return(
        <Box className={classes.backdropImagesContainer}>
            <img src={items.url} className={classes.ImageSizes} alt="pics" />
            <Typography className={classes.countset}>{index+1}/{count}</Typography>
        </Box>
    )
  })}
        
    </Slider>
</Box>
  );
};

export default MobileSlider;
