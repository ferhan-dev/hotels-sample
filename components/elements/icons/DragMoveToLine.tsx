import { SvgIconProps } from "@material-ui/core";
import { OpenWith } from "@material-ui/icons";
import React from "react";

const DragMoveToLineIcon: React.FC<SvgIconProps> = (props) => {
  return <OpenWith fontSize="inherit" {...props} />;
};

DragMoveToLineIcon.defaultProps = {};

export default DragMoveToLineIcon;
