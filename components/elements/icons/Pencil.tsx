import { SvgIconProps } from "@material-ui/core";
import { Create } from "@material-ui/icons";
import React from "react";

const PencilIcon: React.FC<SvgIconProps> = (props) => {
  return <Create fontSize="inherit" {...props} />;
};

export default PencilIcon;
