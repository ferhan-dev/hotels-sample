import { Box, Container, Typography } from "@material-ui/core";
import React from "react";

import { useSmallSize } from "src/hooks/screenSize";
import DiscoverCard from "../../DiscoverCard";
import EnhancedSlider from "../../Slider";
import { properties } from "./data";
import { useStyles } from "./styles";
import { useRouter } from "next/router";
const DiscoverProperties = () => {
  const classes = useStyles();
  const router = useRouter();
  const accountRoute: string = router.route.replace("/", "");
  const isSmallSize = useSmallSize();
  return (
    <Box
      className={
        accountRoute == "account-setting"
          ? `${classes.sliderphotoWrap}`
          : `${classes.sliderWrap}`
      }
    >
      <Box
        className={
          accountRoute == "account-setting"
            ? `${classes.slideHeader}`
            : `${classes.background}`
        }
      >
        <Container disableGutters className={classes.container} maxWidth="lg">
          <Typography variant={isSmallSize ? "h3" : "h2"}>
            Discover these properties
          </Typography>
          <Typography
            color="textSecondary"
            className={classes.subTitle}
            variant="body2"
          >
            Discover new properties with these amenities
          </Typography>
        </Container>
      </Box>
      <EnhancedSlider
        rootProps={{
          className:
            accountRoute == "account-setting"
              ? `${classes.sliderphotos}`
              : `${classes.slider}`,
        }}
      >
        {React.Children.toArray(
          properties.map((property) => (
            <DiscoverCard
              className={ 
                accountRoute == "account-setting"
                  ? `${classes.imagePhotos}`
                  : `${classes.image}`
              }
              {...property}
            />
          ))
        )}
      </EnhancedSlider>
    </Box>
  );
};

export default DiscoverProperties;
