import {
  Box,
  Divider,
  DividerProps,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(
  ({ palette }) => ({
    divider: {
      background: palette.divider,
      flex: 1,
      height: 1,
    },
    root: {
      alignItems: "center",
      display: "flex",
      gap: "4px",
    },
  }),
  { index: 1 }
);

const AppDivider: React.FC<DividerProps> = ({
  style,
  className,
  children,
  ...otherProps
}) => {
  const classes = useStyles();
  if (children)
    return (
      <Box style={style} className={classes.root}>
        <Box className={classes.divider} />
        <Typography variant="caption" style={{ color: "#5A6987" }}>
          {children}
        </Typography>
        <Box className={classes.divider} />
      </Box>
    );

  return <Divider {...otherProps} className={className} style={style} />;
};

export default AppDivider;
