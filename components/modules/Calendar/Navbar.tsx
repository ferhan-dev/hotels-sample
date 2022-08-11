import { Box, IconButton } from "@material-ui/core";
import React from "react";
import ArrowLeftIcon from "src/components/elements/icons/ArrowLeft";
import ArrowRightIcon from "src/components/elements/icons/ArrowRight";
import AppTypography from "src/components/elements/Typography";
import { useScreenSizeDown } from "src/hooks";
import { useNavbarStyles } from "./styles";

interface Props {
  leftBtn: React.ReactNode;
  rightBtn: React.ReactNode;
}

const CalendarNavbar: React.FC<Props> = ({ leftBtn, rightBtn }) => {
  const classes = useNavbarStyles();
  const isSmallerSizeDown = useScreenSizeDown("xs");
  return (
    <Box className={classes.root}>
      {leftBtn}
      <Box className={classes.monthWrapper}>
        <IconButton className={classes.iconBtn}>
          <ArrowLeftIcon className={classes.icon} />
        </IconButton>
        <AppTypography
          neutralColor={800}
          variant={isSmallerSizeDown ? "heading" : "displaySmall"}
        >
          July 2021
        </AppTypography>
        <IconButton className={classes.iconBtn}>
          <ArrowRightIcon className={classes.icon} />
        </IconButton>
      </Box>
      {rightBtn}
    </Box>
  );
};

export default CalendarNavbar;
