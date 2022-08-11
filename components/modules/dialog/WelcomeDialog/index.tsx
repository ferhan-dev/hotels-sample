import { Avatar, Box, Typography } from "@material-ui/core";
import React from "react";

import AppDialog from "src/components/elements/Dialog";
import AppDivider from "src/components/elements/Divider";
import AppButton from "src/components/elements/Button";
import FacebookIcon from "src/components/elements/icons/Facebook";
import GoogleIcon from "src/components/elements/icons/Google";
import CloseIcon from "src/components/elements/icons/Close";
import { useSmallerSize } from "src/hooks/screenSize";
import { useStyles } from "./styles";

interface Props {
  open: boolean;
  onClose: () => void;
}

const WelcomeDialog: React.FC<Props> = ({ open, onClose }) => {
  const classes = useStyles();
  const isSmallerSize = useSmallerSize();

  const handleClose = () => {
    onClose();
  };

  return (
    <AppDialog maxWidth="sm" open={open}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography
          style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
          variant={isSmallerSize ? "h6" : "h5"}
        >
          Welcome to Chalet Retreat!{" "}
          <Avatar
            className={classes.emoji}
            src="/images/celebrate-emoji.png"
            variant="square"
          />
        </Typography>
        <CloseIcon onClick={handleClose} />
      </Box>
      <AppDivider style={{ margin: "24px 0" }} />
      <AppButton
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginBottom: "1rem" }}
      >
        Create an account
      </AppButton>
      <AppButton className={classes.socialButton} fullWidth>
        Continue with Email
      </AppButton>
      <AppDivider style={{ margin: "36px 0" }}>OR</AppDivider>
      <Box display="flex" gridGap="1rem">
        <AppButton
          startIcon={<FacebookIcon />}
          className={classes.socialButton}
          fullWidth
        >
          Facebook
        </AppButton>
        <AppButton
          startIcon={<GoogleIcon />}
          className={classes.socialButton}
          fullWidth
        >
          Google
        </AppButton>
      </Box>
    </AppDialog>
  );
};

export default WelcomeDialog;
