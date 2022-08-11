import { makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "12px",
    display: "block",
  },
}));

const AppImage: React.FC<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = ({ className, ...otherProps }) => {
  const classes = useStyles();
  return (
    <img
      className={clsx(className, classes.root)}
      draggable={false}
      {...otherProps}
    />
  );
};

export default AppImage;
