import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import AppButton from "src/components/elements/Button";
import AppForm from "src/components/elements/Form";
import { useStyles } from "./styles";
import { userResetPassword } from "src/services/api/auth";

const StepOneSection: React.FC = ({ children }) => {
  const [email, setEmail] = useState("");
  const [Success, setSuccess]: any = useState("");
  const [error, setError] = useState("");
  const classes = useStyles();

  const handleSubmit = () => {
    userResetPassword(email)
      .then((data) => {
        localStorage.setItem("status", data?.data);
        setError("");
        setSuccess(data?.data);
      })
      .catch((err) => {
        setSuccess("");
        setError(err?.response?.data?.errors?.email[0]);
      });
  };

  return (
    <AppForm>
      {Success == 1 ? <p> successfully sent , please check your email </p> : ""}
      {error && <p>{error}</p>}
      <label className={classes.emaillabel}>
        Email <span>*</span>
      </label>
      <TextField
        label="Email"
        name="email"
        placeholder="name@domain.com"
        value={email}
        variant="outlined"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className={classes.emailField}
      />
      <AppButton
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginBottom: "20px" }}
        onClick={handleSubmit}
      >
        Send the magic link
      </AppButton>
      <Alert severity="info">
        We will send you a link to this email address you can reset your
        password.
      </Alert>
      {children}
    </AppForm>
  );
};

export default StepOneSection;
