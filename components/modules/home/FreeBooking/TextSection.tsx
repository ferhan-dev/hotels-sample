import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import AppButton from "src/components/elements/Button";
import { useSmallSize } from "src/hooks/screenSize";

export const useStyles = makeStyles(({ breakpoints }) => ({
  wrappper: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    [breakpoints.up("md")]: {
      maxWidth: "456px",
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
    [breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: "88px",
    },
  },
}));

const FreeBookingTextSection = () => {
  const classes = useStyles();
  const isSmallSize = useSmallSize();
  return (
    <Box className={classes.wrappper}>
      <Typography variant={isSmallSize ? "h3" : "h1"}>
        Rest easy with worry-free booking
      </Typography>
      <Typography
        color="textSecondary"
        style={{ margin: "16px 0 24px 0" }}
        variant="body2"
      >
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </Typography>
      <AppButton className={classes.button} variant="outlined">
        Learn More
      </AppButton>
    </Box>
  );
};

export default FreeBookingTextSection;
