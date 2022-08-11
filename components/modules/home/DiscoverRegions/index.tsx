import {
  Container,
  Grid,
  Typography,
  makeStyles,
  capitalize,
} from "@material-ui/core";
import React from "react";
import { useSmallSize } from "src/hooks/screenSize";

import DiscoverCard from "../../DiscoverCard";

const regions = [
  "estrie",
  "charlevoix",
  "laurentides",
  "mauricie",
  "portneuf",
  "quebec",
];

const useStyles = makeStyles(
  ({ breakpoints }) => ({
    container: {
      marginTop: "156px",
      marginBottom: "212px",
      [breakpoints.down("lg")]: {
        padding: "0 1rem",
      },
      [breakpoints.down("sm")]: {
        margin: "88px 0",
      },
    },
    image: {
      height: "264px",
      width: "100%",
      marginBottom: "16px",
    },
    title: { marginBottom: "24px" },
  }),
  { index: 1 }
);

const DiscoverRegions = () => {
  const classes = useStyles();
  const isSmallSize = useSmallSize();
  return (
    <Container disableGutters className={classes.container} maxWidth="lg">
      <Typography className={classes.title} variant={isSmallSize ? "h3" : "h2"}>
        Discover the regions near you
      </Typography>
      <Grid container spacing={4}>
        {regions.map((region, index) => (
          <Grid key={index} item xs={12} sm={6} lg={4}>
            <DiscoverCard
              className={classes.image}
              label={capitalize(region)}
              image={`/images/regions/${region}.png`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DiscoverRegions;
