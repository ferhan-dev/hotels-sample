import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    root: {
      paddingTop: "48px",
      paddingBottom: "24px",
      minHeight: "calc(100vh - 198px)",
      [breakpoints.down("xs")]: {
        paddingTop: "24px",
      },
    },
    avatar: {
      background: palette.grey[200],
      height: "128px",
      width: "128px",
      [breakpoints.down("xs")]: {
        height: "156px",
        width: "156px",
      },
    },
    btn: {
      position: "relative",
      padding: "8px 16px 8px 8px",
      [breakpoints.down("xs")]: {
        width: "100%",
        padding: "10px",
      },
    },
    error: {
      color: palette.error.main,
    },
    flexWrapper: {
      display: "flex",
      alignItems: "center",
      [breakpoints.down("xs")]: {
        alignItems: "flex-start",
        flexDirection: "column",
        width: "100%",
      },
    },
    input: {
      opacity: 0,
      position: "absolute",
      width: "100%",
      height: "100%",
    },
    logo: {
      height: "32px",
      width: "24px",
    },
  }),
  { index: 2 }
);
