import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    root: {
      background: palette.background.default,
      borderRadius: "0px 0px 16px 16px",
      padding: "80px 0 0 0",
      maxHeight: "396px",
    },
    flexContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    image: {
      height: "264px",
      width: "100%",
      marginBottom: "16px",

      [breakpoints.down(380)]: {
        height: "192px",
      },
    },
    subTitle: {
      margin: "8px 0 48px 0",
      textAlign: "center",
    },
    title: {
      // textAlign: "center",
    },
  }),
  { index: 1 }
);
