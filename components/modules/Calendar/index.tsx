import { Box, BoxProps } from "@material-ui/core";
import React from "react";

import { useScreenSizeDown } from "src/hooks";
import CalendarHead from "./Head";
import CalendarNavbar from "./Navbar";
import CalendarBody from "./Body";

interface Props {
  rootProps?: BoxProps;
  leftBtn: React.ReactNode;
  rightBtn: React.ReactNode;
}

const Calendar: React.FC<Props> = ({ rootProps, leftBtn, rightBtn }) => {
  const isSmallerSizeDown = useScreenSizeDown("xs");

  return (
    <Box {...rootProps}>
      <CalendarNavbar
        leftBtn={isSmallerSizeDown ? null : leftBtn}
        rightBtn={rightBtn}
      />
      <CalendarHead />
      <CalendarBody />
      {isSmallerSizeDown ? leftBtn : null}
    </Box>
  );
};

export default Calendar;
