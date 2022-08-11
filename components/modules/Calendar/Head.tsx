import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import AppTypography from "src/components/elements/Typography";
import { useScreenSizeDown } from "src/hooks";
import { calendarDays } from "./data";

const useStyles = makeStyles(
  ({ breakpoints, palette, shape }) => ({
    root: {
      alignItems: "center",
      borderRadius: shape.borderRadius,
      display: "flex",
      marginBottom: "16px",
    },
    cell: {
      alignItems: "center",
      background: palette.grey[100],
      display: "flex",
      justifyContent: "center",
      height: "40px",
      maxWidth: "161px",
      width: "100%",
      [breakpoints.down("xs")]: {
        height: "32px",
      },
    },
    text: {
      textAlign: "center",
    },
  }),
  { index: 1 }
);

const CalendarHead: React.FC = () => {
  const classes = useStyles();
  const isSmallerSizeDown = useScreenSizeDown("xs");
  return (
    <Box className={classes.root}>
      {React.Children.toArray(
        calendarDays.map(({ label, labelShort }) => (
          <Box className={classes.cell}>
            <AppTypography
              className={classes.text}
              neutralColor={500}
              variant={isSmallerSizeDown ? "caption" : "subHeading"}
            >
              {isSmallerSizeDown ? labelShort : label}
            </AppTypography>
          </Box>
        ))
      )}
    </Box>
  );
};

export default CalendarHead;
