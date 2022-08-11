import { SvgIconProps } from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
import React from "react";

const ArrowDownIcon: React.FC<SvgIconProps> = ({ style, ...props }) => {
  return (
    <KeyboardArrowDown
      fontSize="inherit"
      style={{ fontSize: "14px", ...style }}
      {...props}
    />
  );
};

export default ArrowDownIcon;
