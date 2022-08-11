import { makeStyles, SvgIconProps } from "@material-ui/core";
import { Block } from "@material-ui/icons";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    WebkitTransform: "rotateX(180deg)",
    transform: "rotateX(180deg)",
  },
}));

const ForbidIcon: React.FC<SvgIconProps> = ({ className, ...props }) => {
  const classes = useStyles();
  return (
    <Block
      fontSize="inherit"
      className={clsx(classes.root, className)}
      {...props}
    />
  );
};

export default ForbidIcon;
