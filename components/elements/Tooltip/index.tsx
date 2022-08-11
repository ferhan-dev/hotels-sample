import {
  IconButton,
  makeStyles,
  Tooltip,
  TooltipProps,
} from "@material-ui/core";
import React from "react";
import TooltipIcon from "../icons/Tooltip";

const useStyles = makeStyles(
  ({ palette }) => ({
    popper: {
      borderRadius: "4px",
      padding: "8px",
      maxWidth: "168px",
    },
    popperArrow: {
      color: palette.grey[900],
    },
    tooltip: {
      background: palette.grey[900],
      color: palette.common.white,
    },
  }),
  { index: 1 }
);

interface Props extends Omit<TooltipProps, "children"> {
  children?: React.ReactNode;
}

const AppTooltip: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <Tooltip
      arrow
      classes={{
        popperArrow: classes.popperArrow,
        popper: classes.popper,
        tooltip: classes.tooltip,
      }}
      placement="top"
      {...props}
      children={
        <IconButton style={{ padding: 0 }}>
          <TooltipIcon />
        </IconButton>
      }
    />
  );
};

export default AppTooltip;
