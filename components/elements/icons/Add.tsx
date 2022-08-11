import { SvgIconProps } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";

const AddIcon: React.FC<SvgIconProps> = (props) => {
  return <Add fontSize="inherit" {...props} />;
};

export default AddIcon;
