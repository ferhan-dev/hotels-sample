// @ts-nocheck
import { Box, CircularProgress, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useCallback, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Controller, useForm } from "react-hook-form";
import AppButton from "src/components/elements/Button";
import AppDialog from "src/components/elements/Dialog";
import AppCheckBox from "src/components/elements/CheckBox";
import AppDivider from "src/components/elements/Divider";
import AppSelect from "src/components/elements/Select";
import AppTextField from "src/components/elements/TextField";
import AppForm from "src/components/elements/Form";
import CloseIcon from "src/components/elements/icons/Close";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { FormValues, UserFormValues } from "src/types/form";
import { userResolver } from "src/services/validation";
import { registerUser } from "src/services/api";
import { stepOneFields, stepTwoFields } from "./data";
import { months } from "src/utils";
import { RegisterUser } from "src/store/actions/registerUser";
import { useDispatch } from "react-redux";
import { useStyles } from "./styles";
import SocialLogin from "src/components/elements/SocialLogin";

interface Props {
  open: boolean;
  onClose: () => void;
}

const initialValues: Partial<FormValues> = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
  day: "",
  year: "",
  month: "",
  language: "",
};

const SignupDialog: React.FC<Props> = ({ open, onClose }) => {
  const [error, setError] = useState("");
  const [isFinalStep, setIsFinalStep] = useState(false);
  const [warning, setWarning] = useState(false);
  const dispatch = useDispatch();

  const { mutateAsync, isLoading } = useMutation(registerUser);
  const client = useQueryClient();
  const classes = useStyles();
  const isSmallerSizeDown = useScreenSizeDown("xs");
  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
    register,
  } = useForm<FormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      ...initialValues,
    },
    resolver: userResolver,
  });

  const handleClose = useCallback(() => {
    setIsFinalStep(false);
    setWarning(false);
    setError("");
    reset({ ...initialValues }, { keepErrors: false, keepValues: false });
    onClose();
  }, []);
  const handleContinueToFinalStep = useCallback(() => {
    const keys: (keyof FormValues)[] = [
      "email",
      "confirm_password",
      "first_name",
      "last_name",
      "password",
    ];
    const values = getValues();
    if (values.password !== values.confirm_password) {
      setWarning(true);
      return;
    }
    const hasEmptyFields = keys.some((key) => !values[key]);

    if (hasEmptyFields) {
      setWarning(true);
      return;
    }

    setWarning(false);
    setIsFinalStep(true);
  }, []);

  const handleContinueToFirstStep = useCallback(() => {
    const keys: (keyof FormValues)[] = [
      "email",
      "confirm_password",
      "first_name",
      "last_name",
      "password",
    ];
    const values = getValues();
    const hasEmptyFields = keys.some((key) => !values[key]);

    if (hasEmptyFields) {
      setWarning(true);
      return;
    }

    setWarning(false);
    setIsFinalStep(false);
  }, []);

  const onRegisterUser = useCallback(async (values: unknown) => {
    try {
      const { year, day, month, ...others } = values as UserFormValues;
      const monthIndex = months.indexOf(month);
      const birthdate = new Date(
        parseInt(year),
        monthIndex,
        parseInt(day)
      ).toLocaleDateString("en-CA");
      const data = await mutateAsync({
        birthdate,
        ...others,
      });
      if(data){
        dispatch(RegisterUser(data));
      }
      // localStorage.setItem("token", token);
      client.setQueryData("authUser", { data });
      handleClose();
    } catch (ex) {
      const error = ex.response?.data;
      if (error) {
        setError(error.message);
      } else {
        setError(ex.message);
      }
    }
  }, []);

  return (
    <AppDialog maxWidth="sm" open={open}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant={isSmallerSizeDown ? "h6" : "h5"}>
          Create your account
        </Typography>
        <CloseIcon onClick={handleClose} />
      </Box>
      <AppDivider style={{ margin: "24px 0" }} />
      {warning ? (
        <Alert severity="warning" style={{ marginBottom: "24px" }}>
          Please fill the required fields.
        </Alert>
      ) : null}
      <AppForm onSubmit={handleSubmit(onRegisterUser)}>
        {!isFinalStep ? (
          <>
            <Box className={classes.nameWrapper}>
              {React.Children.toArray(
                stepOneFields
                  .slice(0, 2)
                  .map((field) => (
                    <AppTextField
                      {...field}
                      register={register}
                      error={Boolean(errors[field.name]?.message)}
                      message={errors[field.name]?.message}
                    />
                  ))
              )}
            </Box>
            <Box className={classes.flexWrapper}>
              {React.Children.toArray(
                stepOneFields
                  .slice(2)
                  .map((field) => (
                    <AppTextField
                      {...field}
                      register={register}
                      error={Boolean(errors[field.name]?.message)}
                      message={errors[field.name]?.message}
                    />
                  ))
              )}
            </Box>
            <AppButton
              onClick={handleContinueToFinalStep}
              variant="contained"
              color="primary"
              fullWidth
            >
              Continue
            </AppButton>
          </>
        ) : (
          <>
            <Alert
              style={{ marginBottom: "1rem" }}
              severity={error ? "error" : "info"}
            >
              {error ? error : "To register, you must be at least 18years old"}
            </Alert>
            <Box className={classes.nameWrapper}>
              {React.Children.toArray(
                stepTwoFields
                  .slice(0, 3)
                  .map(({ name, options, placeholder }) => (
                    <Controller
                      name={name}
                      control={control}
                      render={({
                        field: { ref, ...others },
                        formState: { errors },
                      }) => (
                        <AppSelect
                          options={options}
                          placeholder={placeholder}
                          {...others}
                          inputRef={ref}
                          error={Boolean(errors[name]?.message)}
                          message={errors[name]?.message}
                        />
                      )}
                    />
                  ))
              )}
            </Box>
            <Controller
              name="language"
              control={control}
              render={({
                field: { ref, ...others },
                formState: { errors },
              }) => (
                <AppSelect
                  style={{ marginBottom: "16px" }}
                  {...stepTwoFields[3]}
                  error={Boolean(errors.language?.message)}
                  message={errors.language?.message}
                  {...others}
                  inputRef={ref}
                />
              )}
            />
            <AppButton
              variant="outlined"
              disabled={isLoading}
              onClick={handleContinueToFirstStep}
              className={classes.App_button}
            >
              {isLoading ? (
                <CircularProgress color="primary" size={20} />
              ) : (
                "Back"
              )}
            </AppButton>
            <AppButton
              variant="contained"
              color="primary"
              className={classes.App_button}
              style={{ float: "right" }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress color="primary" size={20} />
              ) : (
                "Create your Account"
              )}
            </AppButton>
            <AppCheckBox
              label={
                <Typography color="textSecondary" variant="button">
                  I don't want to receive promotional messages from
                  ChaletRetreat. You can change it anytime later.
                </Typography>
              }
              style={{ marginTop: "20px" }}
            />
          </>
        )}
      </AppForm>
      <AppDivider style={{ margin: "36px 0" }}>or continue with</AppDivider>
      <SocialLogin />
    </AppDialog>
  );
};

export default SignupDialog;
