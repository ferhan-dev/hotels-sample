import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
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
    [breakpoints.down(426)]: {
        border: "1px solid #EAEEF5",
        borderRadius: "24px",     
    },
  },
  marginLeft: {
    [breakpoints.down(426)]: {
        marginLeft: "20px"     
    },
    [breakpoints.down(321)]: {
        marginLeft: "10px"     
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

const ReviewSlider = () => {
  const classes = useStyles();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          }
        }
      ]
  };

  return (
<Box className={`${classes.Border}`} >
<Slider {...settings} >
    {Reviews.map((items, index) => {
        return(
    <Box key={index} className={`${classes.dFlex} ${classes.marginLeft}`}>
        <br />
    <Box className={classes.dFlex + " " + classes.imgMarginBottom} >
      <img src={items.profileUrl} height="50" width="50" />
        <Typography color="textSecondary" variant="body2" className={classes.cardMainHeading}> {items.name} <p className={classes.cardSubHeading}>{items.date}</p> </Typography>
    </Box>
        <Typography color="textSecondary" className={classes.CardDescription} variant="body2" >
        {items.description}
        </Typography>
        <Box className={classes.dFlex}>
          <StarIcon style={{ color: 'green' }} />
          <StarIcon style={{ color: 'green' }} />
          <StarIcon style={{ color: 'green' }} />
          <StarIcon style={{ color: 'green' }} />
          <StarHalfIcon style={{ color: 'green' }} />
      <Typography color="textSecondary" variant="body2"> <span>4,5</span><span> (24 Review)</span></Typography>
      </Box>
      <br />
    </Box>
        )
    })}
    </Slider>
</Box>
  );
};

export default ReviewSlider;
