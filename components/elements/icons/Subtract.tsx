import { SvgIconProps } from "@material-ui/core";
import { Remove } from "@material-ui/icons";
import React from "react";

const SubtractIcon: React.FC<SvgIconProps> = (props) => {
  return <Remove {...props} />;
};

export default SubtractIcon;
