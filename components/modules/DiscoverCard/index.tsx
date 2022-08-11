import { Box, Typography } from "@material-ui/core";
import React from "react";

import AppImage from "src/components/elements/Image";

interface Props {
  image: string;
  label: string;
  style?: React.CSSProperties;
  className?: string;
}

const DiscoverCard: React.FC<Props> = ({ image, label, ...otherProps }) => {
  return (
    <Box>
      <AppImage src={image} alt={label} {...otherProps} />
      <Typography variant="h5">{label}</Typography>
    </Box>
  );
};

export default DiscoverCard;
