import { makeStyles, SvgIconProps } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    cursor: "pointer",
    fontSize: "17.15px",
  },
}));

const CloseIcon: React.FC<SvgIconProps> = (props) => {
  const classes = useStyles();
  return <Close fontSize="inherit" className={classes.root} {...props} />;
};

export default CloseIcon;
