import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    background: {
      background: palette.background.default,
      borderRadius: "16px",
      height: "396px",
      maxWidth: "1360px",
      margin: "auto",
    },
    container: {
      paddingTop: "80px",
      height: "336px",
      [breakpoints.down("lg")]: {
        paddingLeft: "1rem",
        paddingRight: "1rem",
      },
      [breakpoints.down(375)]: {
        paddingTop: "48px",
        height: "296px"
      },
    },
    subTitle: {
      margin: "8px 0 72px 0",
    },
    title: {},
  }),
  { index: 2 }
);
