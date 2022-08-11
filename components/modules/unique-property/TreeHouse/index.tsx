import { Box, Container } from "@material-ui/core";
import React from "react";

import { useStyles } from "./styles";
import FreeBookingImageSection from "./ImageSection";
import FreeBookingTextSection from "./TextSection";

const FreeBooking = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="lg">
      <Box className={classes.flexWrapper}>
        <FreeBookingImageSection />
        <FreeBookingTextSection />
      </Box>
    </Container>
  );
};

export default FreeBooking;
