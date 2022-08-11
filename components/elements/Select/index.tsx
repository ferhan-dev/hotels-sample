import {
  FormControl,
  makeStyles,
  MenuItem,
  Select,
  SelectProps,
} from "@material-ui/core";
import React from "react";
import { Path } from "react-hook-form";

import { FormOption, FormValues } from "src/types/form";
import ArrowDownIcon from "../icons/ArrowDown";
import InputError from "../InputError";
import EnhancedInput from "../TextField/Input";
import AppTypography from "../Typography";

const useStyles = makeStyles(
  () => ({
    icon: {
      right: "21px",
      top: "calc(50% - 7px)",
    },
  }),
  { index: 1 }
);

interface Props extends Omit<SelectProps, "label" | "name"> {
  description?: React.ReactNode;
  label?: string;
  message?: string;
  withLabel?: boolean;
  options: FormOption[];
  optional?: boolean;
  name: Path<FormValues> & string;
}

const AppSelect: React.FC<Props> = ({
  className,
  description,
  error,
  name,
  label,
  options,
  optional,
  placeholder,
  message,
  style,
  withLabel,
  ...otherSelectProps
}) => {
  const classes = useStyles();

  return (
    <FormControl className={className} fullWidth style={style}>
      {withLabel ? (
        <AppTypography
          variant="action"
          neutralColor={800}
          component="label"
          htmlFor={name}
        >
          {label}
          {optional ? null : (
            <AppTypography component="span" color="primary" variant="body14">
              *
            </AppTypography>
          )}
        </AppTypography>
      ) : null}
      <Select
        classes={{
          icon: classes.icon,
        }}
        displayEmpty
        name={name}
        label={label}
        renderValue={(value: any) => (
          <AppTypography
            neutralColor={value ? 700 : 400}
            variant="body"
            style={{ height: "22px" }}
          >
            {value ? value : placeholder}
          </AppTypography>
        )}
        error={error}
        input={<EnhancedInput />}
        aria-describedby={`${name}-helper-text`}
        IconComponent={ArrowDownIcon}
        {...otherSelectProps}
      >
        {React.Children.toArray(
          options?.map(({ label, value }) => (
            <MenuItem value={value}> {label}</MenuItem>
          ))
        )}
      </Select>
      {error && message ? <InputError>{message}</InputError> : description}
    </FormControl>
  );
};

export default AppSelect;
