import {
  Box,
  TextareaAutosize,
  TextareaAutosizeProps,
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";

import AppTypography from "../Typography";
import { useStyles } from "./styles";

interface Props extends TextareaAutosizeProps {
  description?: React.ReactNode;
  label: string;
  optional?: boolean;
}

const AppTextArea: React.FC<Props> = ({
  className,
  description,
  label,
  optional,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.flexWrapper}>
      <AppTypography
        variant="action"
        neutralColor={800}
        component="label"
        htmlFor={props.name}
      >
        {label}
        {optional ? null : (
          <AppTypography component="span" color="primary" variant="body14">
            *
          </AppTypography>
        )}
      </AppTypography>
      <Box className={classes.flexWrapper}>
        <TextareaAutosize
          aria-invalid="false"
          className={clsx(className, classes.textarea)}
          {...props}
          maxLength={300}
        />
        <AppTypography
          className={classes.count}
          neutralColor={400}
          variant="caption"
        >
          0/300
        </AppTypography>
      </Box>
      {description}
    </Box>
  );
};

export default AppTextArea;
