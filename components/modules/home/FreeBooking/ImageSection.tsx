import { Box, Chip, Avatar, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";
import { useImageSectionStyles } from "./styles";

const FreeBookingImageSection = () => {
  const classes = useImageSectionStyles();
  return (
    <Box className={classes.image}>
      <Box className={classes.reviewWrapper}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop="-44px"
        >
          <Chip
            classes={{
              root: classes.chip,
              icon: classes.chipIcon,
              label: classes.chipLabel,
            }}
            icon={
              <Rating size="small" max={1} precision={0.1} readOnly value={1} />
            }
            label="4,5"
          />
          <Avatar src="/images/user.jfif" className={classes.avatar} />
        </Box>
        <Typography color="textPrimary" variant="body1">
          James Arthur
        </Typography>
        <Typography
          style={{ margin: "8px 0 16px 0" }}
          color="textSecondary"
          variant="caption"
        >
          Home Seller, USA
        </Typography>
        <Typography color="textSecondary" variant="body2">
          “Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia.”
        </Typography>
      </Box>
    </Box>
  );
};

export default FreeBookingImageSection;
