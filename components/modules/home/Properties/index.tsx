import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AppButton from "src/components/elements/Button";
import { useSmallSize } from "src/hooks/screenSize";
import PropertyCard from "../../PropertyCard";
import { useStyles } from "./styles";
import { getProperties } from "src/services/api/listingForm";
// import {
//   getRoomsData,
//   // deleteRoomsData,
//   // updateRoomsData,
// } from "src/services/api/room";

const Properties = () => {
  const classes = useStyles();
  const isSmallSize = useSmallSize();
  const [property_data, setPropertyData] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // getRoomsData();
      // deleteRoomsData();
      // updateRoomsData();
      getProperties()
        .then((d) => {
          setPropertyData(d.items);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  return (
    <Container className={classes.root} maxWidth="xl">
      <Box className={classes.background}></Box>
      <Container className={classes.container} maxWidth="lg">
        <Typography
          className={classes.title}
          variant={isSmallSize ? "h3" : "h2"}
        >
          Our Properties
        </Typography>
        <Typography
          className={classes.subTitle}
          component="p"
          color="textSecondary"
          variant="body2"
        >
          Discover properties that let you take a step back from the everyday
          world.
        </Typography>
        <Grid container spacing={3}>
          {property_data &&
            property_data.map((data, index) => (
              // {Array.from({ length: 12 }).map((data, index) => {
              <Grid
                className={classes.gridItem}
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
              >
                <PropertyCard data={data} />
              </Grid>
            ))}
        </Grid>
        <AppButton
          variant="contained"
          color="primary"
          className={classes.button}
        >
          See All
        </AppButton>
      </Container>
    </Container>
  );
};

export default Properties;
