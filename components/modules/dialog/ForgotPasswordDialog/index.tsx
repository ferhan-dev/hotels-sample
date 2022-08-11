import { Box, Typography } from "@material-ui/core";
import React, { useState } from "react";

import AppDialog from "src/components/elements/Dialog";
import AppDivider from "src/components/elements/Divider";
import CloseIcon from "src/components/elements/icons/Close";
import StepTwoSection from "./StepTwoSection";
import StepOneSection from "./StepOneSection";
import { useSmallerSize } from "src/hooks/screenSize";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ForgotPasswordDialog: React.FC<Props> = ({ open, onClose }) => {
  const [isFinalStep, setIsFinalStep] = useState(false);
  const isSmallerSize = useSmallerSize();

  const handleClose = () => {
    onClose();

    setIsFinalStep((value) => !value);
  };
  const status: any =
    typeof window !== "undefined" && localStorage.getItem("status");
  return (
    <AppDialog maxWidth="sm" open={open}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant={isSmallerSize ? "h6" : "h5"}>
          {isFinalStep || status == 1
            ? "Create new password"
            : "Forgot Password"}
        </Typography>
        <CloseIcon onClick={handleClose} />
      </Box>
      <AppDivider style={{ margin: "24px 0" }} />
      {isFinalStep || status == 1 ? <StepTwoSection /> : <StepOneSection />}
    </AppDialog>
  );
};

export default ForgotPasswordDialog;
