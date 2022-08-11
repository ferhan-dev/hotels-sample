import { Avatar, makeStyles, Typography } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import AppButton from "src/components/elements/Button";
import AppDivider from "src/components/elements/Divider";
import AppImage from "src/components/elements/Image";
import AppPaper from "src/components/elements/Paper";
import AppTypography from "src/components/elements/Typography";
import { eudoxusSansFontFamily } from "src/components/foundation/typography";
import { COMPANY_NAME } from "src/constants";

const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    btn: {
      padding: "10px 20px",
    },
    btnGroup: {
      alignItems: "center",
      display: "flex",
      gap: "15px",
      marginTop: "32px",
      [breakpoints.up("md")]: {
        maxWidth: "350px",
        gap: "20px",
      },
      [breakpoints.down("sm")]: {
        flexDirection: "column",
        margin: "32px auto",
      },
    },
    contactWrapper: {
      alignItems: "center",
      display: "flex",
      gap: "24px",
      [breakpoints.down("sm")]: {
        margin: "0 auto",
      },
    },
    image: {
      borderRadius: 0,
      height: "100vh",
      width: "50%",
      [breakpoints.down("sm")]: {
        display: "none",
      },
    },
    logo: {
      height: "40px",
      width: "32px",
      marginRight: "8px",
    },
    logoText: {
      color: palette.grey[800],
      fontFamily: eudoxusSansFontFamily,
      fontWeight: 800,
      fontSize: "22px",
      lineHeight: "32px",
    },
    logoWrapper: {
      display: "flex",
      alignItems: "center",
      [breakpoints.down("sm")]: {
        margin: "0 auto",
      },
    },
    paper: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
    },
    text: {
      [breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      height: "65.33vh",
      justifyContent: "space-between",
      maxWidth: breakpoints.values.sm,
      width: "fit-content",
      margin: "auto",
      [breakpoints.down("xs")]: {
        height: "70vh",
        padding: "0 24px",
      },
    },
  }),
  { index: 1 }
);

const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Not Found - {COMPANY_NAME}</title>
      </Head>
      <AppPaper className={classes.paper}>
        <div className={classes.wrapper}>
          <div className={classes.logoWrapper}>
            <Avatar
              alt={COMPANY_NAME}
              className={classes.logo}
              src="/images/green-logo.png"
              variant="square"
            />
            <Typography className={classes.logoText}>chaletretreat</Typography>
          </div>
          <div>
            <AppTypography
              className={classes.text}
              variant="displayXLarge"
              color="primary"
            >
              404
            </AppTypography>
            <AppTypography
              className={classes.text}
              neutralColor={800}
              style={{ margin: "16px 0 8px 0" }}
              variant="displayLarge"
            >
              Page not found
            </AppTypography>
            <AppTypography
              className={classes.text}
              neutralColor={500}
              variant="body"
            >
              Sorry, we couldn't find the page you're looking for.
            </AppTypography>
            <div className={classes.btnGroup}>
              <AppButton
                className={classes.btn}
                color="primary"
                fullWidth
                variant="contained"
              >
                Go back home
              </AppButton>
              <AppButton className={classes.btn} fullWidth variant="outlined">
                Contact support
              </AppButton>
            </div>
          </div>
          <div className={classes.contactWrapper}>
            <AppTypography neutralColor={500} variant="action">
              Contact
            </AppTypography>
            <AppDivider flexItem orientation="vertical" />
            <AppTypography neutralColor={500} variant="action">
              Status
            </AppTypography>
            <AppDivider flexItem orientation="vertical" />
            <AppTypography neutralColor={500} variant="action">
              Twitter
            </AppTypography>
          </div>
        </div>
        <AppImage
          alt="Not Found Background Image"
          className={classes.image}
          src="/images/404.png"
        />
      </AppPaper>
    </>
  );
};

export default NotFoundPage;
