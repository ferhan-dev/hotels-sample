import { makeStyles } from "@material-ui/core";
import { ErrorOutline } from "@material-ui/icons";
import React from "react";
import AppTypography from "../Typography";

const useStyles = makeStyles(
  () => ({
    root: {
      alignItems: "center",
      display: "flex",
      gap: "6px",
      marginTop: "4px",
    },
  }),
  { index: 2 }
);

const InputError: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <AppTypography className={classes.root} variant="caption" color="error">
      <ErrorOutline
        color="error"
        fontSize="inherit"
        style={{ fontSize: "16px" }}
      />
      {children}
    </AppTypography>
  );
};

export default InputError;
