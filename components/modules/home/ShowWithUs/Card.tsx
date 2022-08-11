import { Box, Typography } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { useCardStyles } from "./styles";

interface Props {
  className?: string;
  icon: React.ReactNode;
  iconWrapperColor: string;
  subTitle: string;
  title: string;
  style?: React.CSSProperties;
}

const ShowWithUsCard: React.FC<Props> = ({
  className,
  icon,
  iconWrapperColor,
  subTitle,
  title,
  style,
}) => {
  const classes = useCardStyles();
  return (
    <Box style={style} className={clsx(classes.root, className)}>
      <Box
        style={{ background: iconWrapperColor }}
        className={classes.iconWrapper}
      >
        {icon}
      </Box>
      <Typography
        style={{ margin: "16px 0 8px 0", textAlign: "center" }}
        variant="h6"
      >
        {title}
      </Typography>
      <Typography
        color="textSecondary"
        component="p"
        style={{ textAlign: "center" }}
        variant="body2"
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default ShowWithUsCard;
