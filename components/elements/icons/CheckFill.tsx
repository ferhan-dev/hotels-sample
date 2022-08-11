import { SvgIconProps } from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";
import React from "react";

const CheckFillIcon: React.FC<SvgIconProps> = (props) => {
  return <CheckCircle fontSize="inherit" {...props} />;
};

export default CheckFillIcon;
