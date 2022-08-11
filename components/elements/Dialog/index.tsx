import { Dialog, DialogProps, makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles(
  ({ breakpoints }) => ({
    paper: {
      borderRadius: "12px",
      padding: "32px",
      width: "100%",
      [breakpoints.down("xs")]: {
        padding: "24px",
      },
    },
  }),
  { index: 1 }
);

const AppDialog: React.FC<DialogProps> = ({
  classes: dialogClasses,
  ...otherProps
}) => {
  const classes = useStyles();
  return (
    <Dialog
      {...otherProps}
      classes={{
        paper: clsx(dialogClasses?.paper, classes.paper),
      }}
    />
  );
};

export default AppDialog;
