import { makeStyles, Paper, PaperProps } from "@material-ui/core";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles(
  () => ({
    root: {
      minHeight: "100vh",
      maxWidth: "100vw",
      position: "relative",
      width: "100%",
    },
  }),
  { index: 1 }
);

const AppPaper: React.FC<PaperProps> = ({ className, ...otherProps }) => {
  const classes = useStyles();
  return (
    <Paper
      className={clsx(classes.root, className)}
      square
      {...otherProps}
    />
  );
};

export default AppPaper;
