import { Box, Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import React from "react";

import AppDialog from "src/components/elements/Dialog";
import AppDivider from "src/components/elements/Divider";
import AppButton from "src/components/elements/Button";
import AppTextField from "src/components/elements/TextField";
import { useStyles } from "./styles";
import { useSmallerSize } from "src/hooks/screenSize";
import CloseIcon from "src/components/elements/icons/Close";

interface Props {
  open: boolean;
  onClose: () => void;
}

const SocialLoginDialog: React.FC<Props> = ({ open, onClose }) => {
  const classes = useStyles();
  const isSmallerSize = useSmallerSize();

  const handleClose = () => {
    onClose();
  };

  return (
    <AppDialog maxWidth="sm" open={open}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant={isSmallerSize ? "h6" : "h5"}>
          Complete Your Profile
        </Typography>
        <CloseIcon onClick={handleClose} />
      </Box>
      <AppDivider style={{ margin: "24px 0" }} />
      <Box className={classes.nameWrapper}>
        <AppTextField
          label="Firstname"
          placeholder="Your first name"
          name="first_name"
        />
        <AppTextField
          label="Lastname"
          placeholder="Your last name"
          name="last_name"
        />
      </Box>
      <AppTextField label="Email" placeholder="name@domain.com" name="email" />
      <AppButton
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginBottom: "20px" }}
      >
        Complete
      </AppButton>
      <FormControlLabel
        control={<Checkbox checked={true} name="checkedA" />}
        label={
          <Typography color="textSecondary" variant="button">
            I don't want to receive promotional messages from ChaletRetreat. You
            can change it anytime later.
          </Typography>
        }
      />
    </AppDialog>
  );
};

export default SocialLoginDialog;
