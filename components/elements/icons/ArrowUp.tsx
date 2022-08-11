import { SvgIconProps } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import React from "react";

const ArrowUpIcon: React.FC<SvgIconProps> = ({ style, ...props }) => {
  return (
    <KeyboardArrowUp
      fontSize="inherit"
      style={{ fontSize: "14px", ...style }}
      {...props}
    />
  );
};

export default ArrowUpIcon;
