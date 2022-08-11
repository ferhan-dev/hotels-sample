import { Box, CircularProgress, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "src/store/actions/userAction";
import { loginStatusSelector } from "src/store/selectors/userSelector";
import AppButton from "src/components/elements/Button";
import AppDialog from "src/components/elements/Dialog";
import AppDivider from "src/components/elements/Divider";
import AppForm from "src/components/elements/Form";
import AppTextField from "src/components/elements/TextField";
import FacebookIcon from "src/components/elements/icons/Facebook";
import AppTypography from "src/components/elements/Typography";
import GoogleIcon from "src/components/elements/icons/Google";
import CloseIcon from "src/components/elements/icons/Close";
import { ModalVariant } from "src/types/modal";
import { FormValues, UserFormValues } from "src/types/form";
import { userResolver } from "src/services/validation";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { usePrevious } from "src/hooks";
import { useStyles } from "./styles";

interface Props {
  open: boolean;
  onClose: () => void;
  setModal: React.Dispatch<React.SetStateAction<ModalVariant>>;
}

const initialValues: Partial<FormValues> = {
  email: "",
  password: "",
};

const fields = [
  {
    label: "Email",
    placeholder: "name@domain.com",
    name: "email" as const,
  },
  {
    label: "Password",
    placeholder: "at least 8 characters",
    name: "password" as const,
    type: "password",
  },
];

const SigninDialog: React.FC<Props> = ({ open, onClose, setModal }) => {
  const dispatch =  useDispatch();

  const loginStatus = useSelector(loginStatusSelector);
  const error = loginStatus?.error;
  const loading = loginStatus?.loading;
  const success = loginStatus?.success;
  const previousLoading = usePrevious(loading);

  const classes = useStyles();
  const isSmallerSizeDown = useScreenSizeDown("xs");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
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

  const onLoginUser = (values: UserFormValues) => dispatch(loginAction(values));

  useEffect(() => {
    if (previousLoading && !loading && success) {
      handleClose();
    }
  }, [previousLoading, loading, success])

  return (
    <AppDialog maxWidth="sm" open={open}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant={isSmallerSizeDown ? "h6" : "h5"}>
          Sign in to continue
        </Typography>
        <CloseIcon onClick={handleClose} />
      </Box>
      <AppDivider style={{ margin: "24px 0" }} />
      {error ? (
        <Alert severity="error" style={{ marginBottom: "24px" }}>
          {error}
        </Alert>
      ) : null}
      <AppForm onSubmit={handleSubmit(onLoginUser)}>
        {React.Children.toArray(
          fields.map((field) => (
            <AppTextField
              {...field}
              register={register}
              error={Boolean(errors[field.name]?.message)}
              message={errors[field.name]?.message}
              style={{ marginBottom: "16px" }}
            />
          ))
        )}
        <AppTypography
          neutralColor={600}
          onClick={() => setModal("forgot-password")}
          style={{ textAlign: "right", margin: "-8px 0 20px 0" }}
          variant="action"
        >
          Forgot Password?
        </AppTypography>
        <AppButton
          variant="contained"
          color="primary"
          disabled={loading}
          fullWidth
          type="submit"
        >
          {loading ? (
            <CircularProgress color="primary" size={20} />
          ) : (
            "Sign in"
          )}
        </AppButton>
      </AppForm>
      <AppDivider style={{ margin: "36px 0" }}>or continue with</AppDivider>
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

export default SigninDialog;
