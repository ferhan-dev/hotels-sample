import React, { useState } from "react";

import AppButton from "src/components/elements/Button";
import AppForm from "src/components/elements/Form";
import { useStyles } from "./styles";
import { TextField } from "@material-ui/core";
import { userEmailResetPassword } from "src/services/api/auth";

const StepTwoSection: React.FC = () => {
  const [password, setNewPassword] = useState("");
  const classes = useStyles();
  const [password_confirmation, setRepeatPassword] = useState("");

  const handleSubmit = () => {
    let data = {
      password: password,
      password_confirmation: password_confirmation,
    };
    userEmailResetPassword(data);
  };
  return (
    <AppForm>
      <label className={classes.emaillabel}>
        New Password<span>*</span>
      </label>
      <TextField
        label="New Password"
        variant="outlined"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="at least 8 characters"
        className={classes.emailField}
      />
      <label className={classes.emaillabel}>
        Repeat New Password<span>*</span>
      </label>
      <TextField
        label="Repeat New Password"
        variant="outlined"
        name="password"
        type="password"
        value={password_confirmation}
        onChange={(e) => setRepeatPassword(e.target.value)}
        placeholder="Repeat your password"
        className={classes.emailField}
      />
      <AppButton
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginBottom: "20px" }}
        onClick={handleSubmit}
      >
        Confirm
      </AppButton>
    </AppForm>
  );
};

export default StepTwoSection;
