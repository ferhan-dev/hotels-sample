import { Box, IconButton } from "@material-ui/core";
import React from "react";

import PencilIcon from "src/components/elements/icons/Pencil";
import AppTypography from "src/components/elements/Typography";
import { useStepContentStyles } from "./styles";

interface Props {
  label: string;
  onEditSection: () => void;
}

const InbetweenStepContent: React.FC<Props> = ({ label, onEditSection }) => {
  const classes = useStepContentStyles();
  return (
    <Box className={classes.root}>
      <AppTypography variant="action">{label}</AppTypography>
      <IconButton className={classes.btn} onClick={onEditSection}>
        <PencilIcon style={{ fontSize: "18px" }} />
      </IconButton>
    </Box>
  );
};

export default InbetweenStepContent;
