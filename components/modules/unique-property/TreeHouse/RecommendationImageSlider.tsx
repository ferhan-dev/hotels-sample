import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSmallSize } from "src/hooks/screenSize";
import StarIcon from '@material-ui/icons/Star';
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

  subHeading: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "20px"
  },

  subHeadingInner: {
    display: "flex",
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
    height: "200px",
    display: "flex",
    borderRadius: "24px",
    gap:"10px"
  },

  countset: {
  width: "40px",
  background: "rgba(9, 15, 27, 0.64)",
  borderRadius:"24px",
  zIndex: 999999999,
  textAlign: "center",
  top: "-38px",
  left: "80%",
  right: "10px",
  position: "relative",
  color: "white",
  fontSize: "12px",
  font: "inter",
  [breakpoints.up(426)]: {
    left: "93%",
   },
  },

  RecommenMain: {
    

    [breakpoints.down(426)]: {
      width: "100%", 
      marginLeft: "53px",   
      },
      [breakpoints.down(376)]: {
        width: "100%", 
        marginLeft: "32px !important",   
        },
        [breakpoints.down(326)]: {
          width: "100%", 
          marginLeft: "0px !important",   
          },
  },

  ImageSizes: {
    borderRadius: "24px",
    width: "270px", height: "200px",
  },

  backdropImages: {
    width: 550,
    height: 'auto',
    borderRadius: 30,
    // objectFit: 'contain'
  }

}));

const Loop = [
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
]

const RecommendationImageSlider = (props: any) => {
  const classes = useStyles();
  const isSmallSize = useSmallSize();


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: false,
    arrows: false
  };


  var settings2 = {
    dots: true,
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
            dots: true
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
          }
        }
      ]
  };

  return (
    <Box className={classes.RecommenMain}>
      <Slider {...settings2}>
          {Loop.map(() => {
              return(
                <Box style={{width: "300px", border: "2px solid black"}}>
                  <Box className="RecommendationImage">
                <Slider {...settings} >
                  {props.images.map((items: any, index: number) => {
                    return(
                        <Box className={classes.backdropImagesContainer} key={index} style={{width: "300px"}}>
                            <img src={items.url} className={`${classes.ImageSizes}`} alt="pics" style={{width: "271px"}}/>
                            {/* <Typography className={classes.countset}>{index+1}/{count}</Typography> */}
                        </Box>
                    )
                  })}
                </Slider>
                </Box>
                <Box style={{width: "271px"}}>
                    <br />
                                <Typography variant={isSmallSize ? "h3" : "h6"}>
                                  Fraternelle
                                </Typography>
                                <Box>
                                  <span>8 guests, 3 beds</span>
                                  <span>|</span>
                                  <span>Petite-Rivière-Saint-François, Canada</span>
                                </Box>
                                <Box className={classes.subHeading}>
                                  <Box className={classes.subHeadingInner}>
                                    <span><StarIcon style={{ color: 'green' }} /></span>
                                    <Typography
                                      color="textSecondary"
                                      className={''}
                                      variant="body2"
                                    >
                                      4,5(24 Review)
                                    </Typography>
                                  </Box>
                                  <Box className={classes.subHeadingInner}>
                                    <Typography
                                      color="textSecondary"
                                      className={''}
                                      variant="body2"
                                    >
                                      <strong>C$819</strong>/night
                                    </Typography>
                                  </Box>
                                </Box>
                              </Box>
                </Box>
              )
          })}

</Slider>
</Box>
  );
};

export default RecommendationImageSlider;
