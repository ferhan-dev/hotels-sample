import { SvgIconProps } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import React from "react";

const MoreVerticalIcon: React.FC<SvgIconProps> = (props) => {
  return <MoreVert fontSize="inherit" {...props} />;
};

export default MoreVerticalIcon;
