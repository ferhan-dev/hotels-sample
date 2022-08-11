import { Box } from "@material-ui/core";
import React from "react";
import { useStepStyles } from "./styles";
import AppTypography from "src/components/elements/Typography";

interface Props {
  completed?: boolean;
  label?: React.ReactNode;
  subTitle: string;
  title: string;
}

const InbetweenStep: React.FC<Props> = ({
  completed,
  label,
  subTitle,
  title,
}) => {
  const classes = useStepStyles({ completed });
  return (
    <Box className={classes.root}>
      <AppTypography className={classes.label} variant="action">
        {label}
      </AppTypography>
      <Box>
        <AppTypography variant="heading" neutralColor={800}>
          {title}
        </AppTypography>
        <AppTypography variant="body" neutralColor={500}>
          {subTitle}
        </AppTypography>
      </Box>
    </Box>
  );
};

export default InbetweenStep;
