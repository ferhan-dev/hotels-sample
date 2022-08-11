import React from "react";
import {
  FormControlProps,
  FormControl,
  InputBaseProps,
  Box,
} from "@material-ui/core";
import PhoneInput from "react-phone-input-2";
import CheckFillIcon from "src/components/elements/icons/CheckFill";
import AppTypography from "src/components/elements/Typography";
import { useStyles } from "./styles";

interface Props {
  label?: string;
  optional?: boolean;
  verified?: boolean;
  rootProps?: FormControlProps;
  inputProps?: InputBaseProps;
  phoneNumber?: string,
  onChangePhoneNumber: (value: string) => void
}

const PhoneNumberField = ({
  inputProps,
  label,
  optional,
  rootProps,
  verified,
  phoneNumber,
  onChangePhoneNumber
}: Props) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth {...rootProps}>
      <AppTypography
        variant="action"
        neutralColor={800}
        component="label"
        htmlFor={inputProps?.name}
        style={{ marginBottom: "4px" }}
      >
        {label}
        {optional ? null : (
          <AppTypography component="span" color="primary" variant="body14">
            *
          </AppTypography>
        )}
      </AppTypography>

      <Box className={classes.flexWrapper}>
        <PhoneInput
          country={"us"}
          value={phoneNumber}
          onChange={(phone: any) => onChangePhoneNumber(phone)}
        />

        {verified && (
          <>
            <AppTypography neutralColor={900} variant="caption">
              Verified
            </AppTypography>
            <CheckFillIcon color="primary" style={{ fontSize: "12px" }} />
          </>
        )}
      </Box>
    </FormControl>
  );
};

export default PhoneNumberField;
