import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints }) => ({
    flexWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      marginBottom: "28px",
    },
    root: {
      paddingTop: "48px",
      paddingBottom: "24px",
      minHeight: "calc(100vh - 198px)",
      [breakpoints.down("xs")]: {
        paddingTop: "24px",
      },
    },
  }),
  { index: 1 }
);
