import {
  FormControlLabel,
  Checkbox,
  FormControlLabelProps,
  makeStyles,
  CheckboxProps,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";

import CheckBoxIcon from "../icons/CheckBox";

const useStyles = makeStyles(
  () => ({
    root: {
      margin: 0,
      gap: "16px",
      "&  .MuiButtonBase-root": {
        padding: 0,
      },
    },
  }),
  { index: 1 }
);

interface Props extends Omit<FormControlLabelProps, "control"> {
  checkBoxProps?: CheckboxProps;
  error?: boolean;
  message?: string;
}

const AppCheckBox: React.FC<Props> = ({
  checkBoxProps,
  error,
  message,
  ...props
}) => {
  const classes = useStyles();
  return (
    <FormControl>
      <FormControlLabel
        {...props}
        classes={{
          root: clsx(classes.root, props.className),
        }}
        control={
          <Checkbox
            {...checkBoxProps}
            icon={<CheckBoxIcon />}
            checkedIcon={<CheckBoxIcon checked />}
          />
        }
      />
      {error && message ? (
        <FormHelperText error>{message}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default AppCheckBox;
