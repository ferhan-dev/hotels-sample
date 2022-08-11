import React from "react";
import { makeStyles } from "@material-ui/core";
import AppButton from "src/components/elements/Button";
import Box from "@material-ui/core/Box";
import FacebookIcon from "src/components/elements/icons/Facebook";
import { signIn } from "next-auth/client";

const useStyles = makeStyles(
  ({ palette }) => ({
    socialButton: {
      border: `1px solid ${palette.divider}`,
      color: `${palette.action.active} !important`,
      "& img": {
        marginRight: "8px",
        marginLeft: "-4px",
      },
    },
  }),
  { index: 1 }
);

const SocialLogin: React.FC = () => {
  const classes = useStyles();

  const redirectUrl = process.env.NEXT_PUBLIC_SOCIAL_LOGIN_REDIRECT_URL;

  return (
    <Box display="flex" gridGap="1rem">
      <AppButton
        startIcon={<FacebookIcon />}
        className={classes.socialButton}
        fullWidth
        onClick={() => {
          // signOut();
          signIn("facebook", {
            callbackUrl: redirectUrl,
            redirect: false,
          });
        }}
      >
        Facebook
      </AppButton>
      <AppButton
        // startIcon={<GoogleIcon />}
        className={classes.socialButton}
        fullWidth
        onClick={() => {
          // signOut();
          signIn("google", {
            callbackUrl: redirectUrl,
            redirect: false,
          });
        }}
      >
        <img src="/images/google-icon.svg" alt="google-icon" />
        Google
      </AppButton>
    </Box>
  );
};

export default SocialLogin;
