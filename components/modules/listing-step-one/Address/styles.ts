import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      paddingTop: "48px",
      paddingBottom: "24px",
      minHeight: "calc(100vh - 198px)",
      [breakpoints.down("xs")]: {
        paddingTop: "24px",
      },
    },
    flexWrapper: {
      display: "flex",
      flexWrap: "wrap",
      gap: "24px",
      marginBottom: "32px",
      "& > div": {
        flexBasis: "47.8%",
        flexGrow: 0,
        maxWidth: "47.8%",
      },
      [breakpoints.down("xs")]: {
        "& > div": {
          flexBasis: "100%",
          maxWidth: "100%",
        },
      },
    },
    image: {
      borderRadius: 0,
      height: "480px",
      width: "100%",
    },
    paper: {
      padding: "20px",
      maxWidth: "744px",
    },
    primaryBtn: {
      [breakpoints.up("sm")]: {
        minWidth: "141px",
      },
      [breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    secondaryBtn: {
      width: "105px",
      margin: "0 16px 0 auto",
      [breakpoints.down("xs")]: {},
    },
  }),
  { index: 1 }
);
