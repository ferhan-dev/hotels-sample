import React, { useEffect } from "react";
import { useSession } from "next-auth/client";
import { useDispatch, useSelector } from "react-redux";
import { socialLoginAction } from "src/store/actions/userAction";
import { loginStatusSelector } from "src/store/selectors/userSelector";
import { useRouter } from "next/router";
import { TO_HOME_PAGE } from "src/constants";
import { makeStyles, Typography } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";

const useStyles = makeStyles(
  () => ({
    infoContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
    },
    infoSection: {
      minWidth: "25%",
      width: "100%",
      minHeight: "25%",
      maxHeight: "40%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "space-around",
    },
  }),
  { index: 1 }
);

const Auth = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [session] = useSession();
  const loginStatus = useSelector(loginStatusSelector);
  const router = useRouter();

  useEffect(() => {
    if (session) {
      const accessToken = session.accessToken;
      if (accessToken) {
        const socialData: any = {
          access_token: accessToken,
          type: session.provider,
        };
        dispatch(socialLoginAction(socialData));
      }
    }
  }, [session]);

  useEffect(() => {
    if (loginStatus.success === true) {
      router.push(TO_HOME_PAGE);
    }
    if (loginStatus.error) {
      setTimeout(() => {
        router.push(TO_HOME_PAGE);
      }, 2000);
    }
  }, [loginStatus]);

  return (
    <div className={classes.infoContainer}>
      <div className={classes.infoSection}>
        {loginStatus.loading && (
          <>
            <div>
              <Typography variant="h4">Signing In ..... Please Wait</Typography>
            </div>
            <div>
              <CircularProgress />
            </div>
          </>
        )}

        {loginStatus.error && <Typography variant="h4">Something Went Wrong</Typography>}
      </div>
    </div>
  );
};

export default Auth;
