import { Color, Typography, TypographyProps } from "@material-ui/core";
import React from "react";
import clsx from "clsx";

import { palette } from "src/components/foundation/palette";
import { AppTypographyVariant } from "src/types/typography";
import { useStyles } from "./styles";

interface Props extends Omit<TypographyProps, "variant"> {
  component?: keyof HTMLElementTagNameMap;
  neutralColor?: keyof Color;
  htmlColor?: string;
  htmlFor?: string;
  variant: AppTypographyVariant;
}
const AppTypography: React.FC<Props> = ({
  className,
  htmlColor,
  neutralColor,
  style,
  variant,
  ...props
}) => {
  const classes = useStyles();
  const styles = {
    color: neutralColor ? palette?.grey![neutralColor] : htmlColor,
  };

  return (
    <Typography
      className={clsx(classes[variant], className)}
      style={{ ...style, ...styles }}
      {...props}
    />
  );
};

export default AppTypography;
