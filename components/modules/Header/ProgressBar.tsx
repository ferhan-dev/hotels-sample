import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    background: palette.primary.main,
    height: "2px",
    left: 0,
    position: "absolute",
    bottom: 0,
  },
}));

const HeaderProgressBar: React.FC<{ width: any }> = ({ width }) => {
  const classes = useStyles();
  return <div style={{ width }} className={classes.root} />;
};

export default HeaderProgressBar;
