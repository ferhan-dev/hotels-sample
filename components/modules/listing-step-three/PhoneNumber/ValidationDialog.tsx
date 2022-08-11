import React, { useState } from "react";
import dynamic from 'next/dynamic';
import { Box } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
// import { reactCodeInput } from 'CodeInputField.scss';
import AppDialog from "src/components/elements/Dialog";
import AppDivider from "src/components/elements/Divider";
import AppTypography from "src/components/elements/Typography";
import CloseIcon from "src/components/elements/icons/Close";
import AppButton from "src/components/elements/Button";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import { resendVerificationApi, verifyPhoneUserApi } from "src/services/api";
import { useDialogStyles } from "./styles";

const ReactPinField = dynamic(import('react-code-input'));

const props = {
  inputStyle: {
    fontFamily: 'monospace',
    margin:  '4px',
    width: '50px',
    height: '42px',
    fontSize: '24px',
    borderRadius: '6px',
    border: '1px solid gray',
    // textAlign: 'center'
  },
  inputStyleInvalid: {
    fontFamily: 'monospace',
    margin:  '4px',
    width: '50px',
    height: '42px',
    fontSize: '24px',
    borderRadius: '6px',
    border: '1px solid gray',
    // textAlign: 'center'
  }
}

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  phone_number: any;
}

const PhoneNumberValidationDialog = ({
  open,
  onClose,
  onConfirm,
  phone_number,
}: Props) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [pin, setPin] = useState("");
  const classes = useDialogStyles();

  const resendVerification = () => resendVerificationApi(phone_number);

  const onVerify = () => {
    if (pin.length === 4) {
      setLoading(true);
      verifyPhoneUserApi({
        phone_number,
        token: pin
      })
      .then(() => onConfirm())
      .catch(ex => {
        const error = ex.response?.data;
        if (error) {
          setError(error.message);
        } else {
          setError(ex.message);
        }
      })
      .finally(() => setLoading(false));
    }
  }

  return (
    <AppDialog classes={{ paper: classes.paper }} open={open} maxWidth="sm">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <AppTypography component="h2" neutralColor={900} variant="displaySmall">
          Enter your security code
        </AppTypography>
        <CloseIcon onClick={onClose} />
      </Box>
      <AppDivider style={{ margin: "20px 0" }} />
      <AppTypography
        className={classes.text}
        variant="action"
        neutralColor={900}
      >
        We sent the code by SMS to {phone_number}
      </AppTypography>
      <AppTypography className={classes.text} variant="body" neutralColor={600}>
        We will send you reservation requests, reminders and other
        notifications. This number should be able to receive text messages or
        calls.
      </AppTypography>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <ReactPinField
          fields={4}
          type="number"
          value={pin}
          name="pin"
          inputMode="numeric"
          onChange={setPin}
          {...props}
        />
      </div>
      <AppButton fullWidth size="small" variant="outlined">
        I prefer to receive a call
      </AppButton>
      <Box className={classes.btnGroup}>
        <AppTypography neutralColor={400} variant="body">
          You didn’t receive it?
        </AppTypography>
        <AppTypography color="primary" variant="action" onClick={resendVerification} style={{ cursor: 'pointer' }}>
          Try again
        </AppTypography>
      </Box>
      {error && (
        <Alert severity="error" style={{ marginBottom: "24px" }}>
          {error}
        </Alert>
      )}
      <ActionButtonGroup
        containerProps={{ className: classes.container }}
        primaryBtnProps={{
          disabled: loading,
          children: "Confirm",
          className: classes.primaryBtn,
          onClick: onVerify,
        }}
        secondaryBtnProps={{
          children: "Cancel",
          className: classes.secondaryBtn,
          startIcon: null,
          onClick: onClose,
        }}
      />
    </AppDialog>
  );
};

export default PhoneNumberValidationDialog;
