import { Box, CircularProgress, Typography } from "@material-ui/core";
import React, { useCallback } from "react";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";

import AppButton from "src/components/elements/Button";
import AppDialog from "src/components/elements/Dialog";
import AppDivider from "src/components/elements/Divider";
import CloseIcon from "src/components/elements/icons/Close";
import { ModalVariant } from "src/types/modal";
import { FormValues } from "src/types/form";
import { userResolver } from "src/services/validation";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { loginUser } from "src/services/api";
// import { useStyles } from "./styles";
import SocialLogin from "src/components/elements/SocialLogin";

interface Props {
  open: boolean;
  onClose: () => void;
  setModal: React.Dispatch<React.SetStateAction<ModalVariant>>;
}

const initialValues: Partial<FormValues> = {
  email: "",
  password: "",
};

const QuestionDialog: React.FC<Props> = ({ open, onClose, setModal }) => {
  const { isLoading } = useMutation(loginUser);
  // const classes = useStyles();
  const isSmallerSizeDown = useScreenSizeDown("xs");
  const { reset } = useForm<FormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      ...initialValues,
    },
    resolver: userResolver,
  });
  const handleClose = useCallback(() => {
    reset({ ...initialValues }, { keepErrors: false, keepValues: false });
    onClose();
  }, []);

  return (
    <AppDialog maxWidth="sm" open={open}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant={isSmallerSizeDown ? "h6" : "h5"}>
          Welcome to Chalet Retreat! 🎉
        </Typography>
        <CloseIcon onClick={handleClose} />
      </Box>
      <AppDivider style={{ margin: "36px 0" }}></AppDivider>
      <AppButton
        variant="contained"
        color="primary"
        disabled={isLoading}
        onClick={() => setModal("signup")}
        fullWidth
        type="submit"
      >
        {isLoading ? (
          <CircularProgress color="primary" size={20} />
        ) : (
          "Create an account"
        )}
      </AppButton>
      <AppButton
        variant="contained"
        disabled={isLoading}
        fullWidth
        type="submit"
        onClick={() => setModal("signin")}
        style={{
          marginTop: "20px",
        }}
      >
        {isLoading ? (
          <CircularProgress color="primary" size={20} />
        ) : (
          "Continue with email"
        )}
      </AppButton>
      <AppDivider style={{ margin: "36px 0" }}>or</AppDivider>
      <SocialLogin />
    </AppDialog>
  );
};

export default QuestionDialog;
