import { Box } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useStyles } from "./styles";


const RecommendationsSlider = () => {
  const classes = useStyles();
  const [isLargeLaptop, setIsLargeLaptop] = useState(false)

  useEffect(() => {
    if(typeof window !== "undefined" && window.innerWidth>1025 && window.innerWidth<1045)
    {
      setIsLargeLaptop(true);
    }
  }, [])
  return (
    <Box>
      <Carousel>
        <div>
          <img className={isLargeLaptop ? classes.recommendationImg : ""} src="/images/properties/chalets-in-the-mountain.png" />
          {/* <Box><img className={classes.heartBTn} src="/images/Button.png" /></Box> */}
        </div>
        <div>
          <img src="/images/properties/chalets-in-the-mountain.png" />
          {/* <Box><img className={classes.heartBTn} src="/images/Button.png" /></Box> */}
        </div>
        <div>
          <img src="/images/properties/chalets-in-the-mountain.png" />
          {/* <Box><img className={classes.heartBTn} src="/images/Button.png" /></Box> */}
          {/* <p className="legend">Legend 3</p>   */}
        </div>
      </Carousel>
    </Box>
  );
};

export default RecommendationsSlider;
