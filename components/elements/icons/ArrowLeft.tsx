import { SvgIconProps } from "@material-ui/core";
import { KeyboardArrowLeft } from "@material-ui/icons";
import React from "react";

const ArrowLeftIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <KeyboardArrowLeft
      fontSize="inherit"
      style={{ fontSize: "19px" }}
      {...props}
    />
  );
};

export default ArrowLeftIcon;
