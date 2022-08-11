import { Box } from "@material-ui/core";
import React from "react";
import { useImageSectionStyles } from "./styles";

const TreeHouseImageSection = () => {
  const classes = useImageSectionStyles();
  return (
    <Box className={classes.image}></Box>
  );
};

export default TreeHouseImageSection;
