import React from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Switch, { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

export interface EnhancedSwitchProps extends SwitchProps {
  classes: Styles;
}

const EnhancedSwitch = withStyles(({ palette, transitions }) => ({
  root: {
    width: "36px",
    height: "20px",
    padding: 0,
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(18px)",
      color: `${palette.common.white} !important`,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: "18px",
    height: "18px",
  },
  track: {
    borderRadius: 20 / 2,
    border: `none`,
    backgroundColor: palette.grey[100],
    opacity: 1,
    transition: transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, className, ...props }: EnhancedSwitchProps) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: clsx(classes.root, className),
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default EnhancedSwitch;
