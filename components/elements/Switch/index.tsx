import React from "react";
import {
  FormControlLabel,
  FormControlLabelProps,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";

import EnhancedSwitch, { EnhancedSwitchProps } from "./Switch";
import { useAddListingContext } from "src/context";

const useStyles = makeStyles(
  () => ({
    root: {
      margin: 0,
      gap: "12px",
    },
  }),
  { index: 1 }
);
interface Props extends Omit<FormControlLabelProps, "control"> {
  switchProps?: EnhancedSwitchProps;
  error?: boolean;
  message?: string;
}

const AppSwitch: React.FC<Props> = ({ switchProps, ...props }: Props) => {
  const classes = useStyles();
  const { form } = useAddListingContext();
  const { setValue } = form;

  return (
    <FormControlLabel
      {...props}
      classes={{
        root: clsx(classes.root, props.className),
      }}
      control={<EnhancedSwitch {...switchProps} />}
      onChange={(e: any) => {
        const isSmart = e.target.checked ? 1 : 0;
        setValue("basic_pricing.is_smart", isSmart);
      }}

      // basic_pricing
    />
  );
};

export default AppSwitch;
