import { Button, ButtonProps } from "@material-ui/core";
import React from "react";

const AppButton: React.FC<ButtonProps> = (props) => {
  return <Button disableElevation {...props} />;
};

export default AppButton;
