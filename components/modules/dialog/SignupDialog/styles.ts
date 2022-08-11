import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    flexWrapper: {
      display: "flex",
      gap: "16px",
      flexDirection: "column",
      marginBottom: "16px",
    },
    nameWrapper: {
      display: "flex",
      marginBottom: "16px",
      gap: "16px",
      [breakpoints.down("xs")]: {
        flexDirection: "column",
        gap: 0,
      },
    },
    socialButton: {
      border: `1px solid ${palette.divider}`,
      color: `${palette.action.active} !important`,
    },
    App_button: {
      width: "100%",
      maxWidth: "229px",
      [breakpoints.down("sm")]: {
        width: "100% !important",
        maxWidth: "100% !important",
        marginTop: "15px !important",
      },
      [breakpoints.down("md")]: {
        width: "100% !important",
        maxWidth: "100% !important",
        marginTop: "15px !important",
      },
    },
  }),
  { index: 1 }
);
