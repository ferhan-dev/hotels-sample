import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      display: "flex",
      paddingBottom: "24px",
      paddingTop: "24px",
      [breakpoints.down("xs")]: {
        paddingBottom: "16px",
        paddingTop: "16px",
      },
    },
    primaryBtn: {
      height: "48px",
      width: "100%",
      marginLeft: "auto",
      [breakpoints.up("sm")]: {
        maxWidth: "264px",
      },
    },
    secondaryBtn: {
      height: "48px",
      width: "105px",
      [breakpoints.down("xs")]: {
        marginRight: "16px",
      },
    },
  }),
  { index: 1 }
);
