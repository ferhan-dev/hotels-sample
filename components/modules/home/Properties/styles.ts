import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    root: {
      background: palette.background.paper,
      padding: 0,
    },
    button: {
      padding: "12px 61.5px",
      margin: "48px auto 0 auto",
      display: "block",
      [breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    background: {
      background: palette.background.default,
      borderRadius: "0px 0px 16px 16px",
      height: "396px",
    },
    container: {
      marginTop: "-316px",
      [breakpoints.up("xl")]: {
        padding: 0,
      },
    },
    gridItem: {
      padding: "16px 12px !important",
    },
    subTitle: {
      margin: "8px 0 48px 0",
      textAlign: "center",
    },
    title: {
      textAlign: "center",
    },
  }),
  { index: 1 }
);
