import { SvgIconProps } from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import React from "react";

const ArrowRightIcon: React.FC<SvgIconProps> = (props) => {
  return <KeyboardArrowRight fontSize="inherit" {...props} />;
};

export default ArrowRightIcon;
