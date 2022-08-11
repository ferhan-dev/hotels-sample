import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    root: {
      alignItems: "center",
      background: palette.background.default,
      borderRadius: "16px",
      display: "flex",
      height: "304px",
      padding: "0 116px",
      [breakpoints.down("lg")]: {
        padding: "0 24px",
      },
      [breakpoints.down("sm")]: {
        borderRadius: "none",
        background: `linear-gradient( ${palette.background.default} 336px, white 337px 100%)`,
        height: "auto",
        flexDirection: "column",
      },
    },
    textWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginRight: "auto",
      [breakpoints.down("sm")]: {
        margin: "48px auto 32px auto",
      },
    },
    resizeWidth: {
      [breakpoints.between("sm", "lg")]: {
        flexBasis: "32%",
      },
    },
    flexWrapper: {
      display: "flex",
      flexDirection: "column",
      margin: "-84px 0 0 24px",
      gridGap: "24px",
      [breakpoints.down("sm")]: {
        gridGap: "32px",
        margin: "32px 0 0 0",
      },
    },
  }),
  { index: 2 }
);

export const useCardStyles = makeStyles(
  ({ palette }) => ({
    root: {
      alignItems: "center",
      background: palette.background.paper,
      borderRadius: "12px",
      boxShadow: "0px 8px 96px -20px rgba(44, 48, 58, 0.04)",
      display: "flex",
      flexDirection: "column",
      height: "224px",
      padding: "32px",
      maxWidth: "360px",
    },
    iconWrapper: {
      alignItems: "center",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      height: "64px",
      width: "64px",
    },
  }),
  { index: 1 }
);
