import { Edit } from "@material-ui/icons";

import { SvgIconProps } from "@material-ui/core";
import React from "react";

const EditIcon: React.FC<SvgIconProps> = (props) => {
  return <Edit fontSize="inherit" {...props} />;
};

export default EditIcon;
