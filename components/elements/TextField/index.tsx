import {
  FormControl,
  Typography,
  InputBaseProps,
  MenuItem,
  Select,
  makeStyles,
} from "@material-ui/core";
import { ErrorOutline } from "@material-ui/icons";
import React from "react";
import { Path } from "react-hook-form";
import clsx from "clsx";

import { FormOption, FormValues } from "src/types/form";
import ArrowDownIcon from "../icons/ArrowDown";
import AppTypography from "../Typography";
import EnhancedInput from "./Input";

const useStyles = makeStyles(
  () => ({
    helperText: {
      alignItems: "center",
      display: "flex",
      gap: "6px",
      marginTop: "4px",
    },
    icon: {
      right: "21px",
      top: "calc(50% - 7px)",
    },
    inputBase: {
      "& > input": {
        padding: "0 20px",
        height: "46px",
      },
    },
  }),
  { index: 1 }
);
interface Props extends Omit<InputBaseProps, "name"> {
  description?: React.ReactNode;
  label: React.ReactNode;
  message?: string;
  select?: boolean;
  withLabel?: boolean;
  options?: FormOption[];
  optional?: boolean;
  register?: any;
  name: Path<FormValues> & string;
}

const AppTextField: React.FC<Props> = ({
  children,
  className,
  description,
  error,
  label,
  message,
  name,
  options,
  optional,
  select,
  style,
  withLabel,
  register,
  value,
  onChange,
  ...props
}) => {
  const classes = useStyles();
  const labelElement = (
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
  );
  return (
    <FormControl fullWidth style={style}>
      {select && options ? (
        <>
          {withLabel ? labelElement : null}
          <Select
            label={label}
            name={name}
            id={name}
            fullWidth
            error={error}
            input={<EnhancedInput />}
            aria-describedby={`${name}-helper-text`}
            IconComponent={ArrowDownIcon}
            classes={{
              icon: classes.icon,
            }}
          >
            <MenuItem value={""}>{label}</MenuItem>
            {React.Children.toArray(
              options.map(({ label, value }) => (
                <MenuItem value={value}>{label}</MenuItem>
              ))
            )}
          </Select>
        </>
      ) : (
        <>
          {labelElement}
          <EnhancedInput
            className={clsx(classes.inputBase, className)}
            name={name}
            fullWidth
            error={error}
            aria-describedby={`${name}-helper-text`}
            onChange={register ? register(name).onChange : onChange}
            onBlur={register && register(name).onBlur}
            inputRef={register && register(name).ref}
            {...props}
            value={value}
          />
        </>
      )}

      {error && message ? (
        <Typography
          className={classes.helperText}
          id={`${name}-helper-text`}
          variant="caption"
          color="error"
        >
          <ErrorOutline
            color="error"
            fontSize="inherit"
            style={{ fontSize: "16px" }}
          />
          {message}
        </Typography>
      ) : (
        description
      )}
    </FormControl>
  );
};

export default AppTextField;
