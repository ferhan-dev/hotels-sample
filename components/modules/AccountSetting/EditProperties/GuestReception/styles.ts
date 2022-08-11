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
    personalInfo: {
      boxShadow: "0px 1px 0px #eaeef5",
      paddingTop: "24px",
      "& h6": {
        fontSize: "18px",
        color: "#090F1B",
      },
    },
    container: {
      maxWidth: "1600px",
    },
    leftArrow: {
      width: "12px",
      height: "12px",
      marginRight: "30px",
      marginLeft: "40px",
      [breakpoints.down(576)]: {
        marginLeft: "10px",
      },
    },
  }),
  { index: 1 }
);
