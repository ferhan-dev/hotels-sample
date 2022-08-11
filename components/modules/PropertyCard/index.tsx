import { Box, Typography } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import React from "react";

import AppImage from "src/components/elements/Image";
import { useStyles } from "./styles";
import { getPropertiesById } from "src/services/api/listingForm";

const PropertyCard = ({ data }: any) => {
  const classes = useStyles();
  const handleGetProperty = (_id: any) => {
    getPropertiesById(_id);
  };
  return (
    <Box onClick={() => handleGetProperty(data?.id)}>
      <AppImage
        src="/images/free-booking.png"
        alt="Property Name"
        className={classes.image}
      />
      <Box>
        <Box className={classes.flexContainer}>
          <Typography variant="body2" color="textSecondary">
            Entire accommodation {data?.number_of_beds} bed(s)
          </Typography>
          <Typography
            style={{ display: "flex", gap: "4px", alignItems: "center" }}
            variant="body2"
          >
            <Star fontSize="inherit" color="primary" />
            <Typography variant="inherit" color="primary">
              3.6
            </Typography>
            <Typography variant="inherit" color="textSecondary">
              (4)
            </Typography>
          </Typography>
        </Box>
        <Box className={classes.flexContainer}>
          <Typography variant="h6">Property Name</Typography>
          <Typography>$50/night</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyCard;
