import { SvgIconProps } from "@material-ui/core";
import { Check } from "@material-ui/icons";
import React from "react";

const CheckIcon: React.FC<SvgIconProps> = (props) => {
  return <Check fontSize="inherit" {...props} />;
};

export default CheckIcon;
