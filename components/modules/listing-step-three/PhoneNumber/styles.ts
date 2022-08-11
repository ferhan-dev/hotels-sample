import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      paddingTop: "48px",
      paddingBottom: "24px",
      minHeight: "calc(100vh - 198px)",
      [breakpoints.down("xs")]: {
        paddingTop: "24px",
      },
    },
    flexWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      marginTop: "24px",
    },
  }),
  { index: 1 }
);

export const useDialogStyles = makeStyles(
  ({ breakpoints }) => ({
    btnGroup: {
      margin: "20px 0",
      display: "flex",
      justifyContent: "flex-end",
      gap: "16px",
    },
    container: {
      padding: 0,
      justifyContent: "flex-end",
      gap: "16px",
    },
    paper: {
      padding: "20px",
    },
    primaryBtn: {
      margin: 0,
      width: "92px",
    },
    secondaryBtn: {
      width: "85px",
    },
    text: {
      [breakpoints.down("xs")]: {
        textAlign: "center",
      },
    },
  }),
  { index: 2 }
);
