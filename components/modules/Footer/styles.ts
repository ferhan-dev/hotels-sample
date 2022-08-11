import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    appbar: {
      background: palette.background.default,
      border: "none",
      marginTop: "96px",
    },
    container: {
      [breakpoints.up("xl")]: {
        padding: 0,
      },
      [breakpoints.down("lg")]: {
        padding: "0 24px",
      },
    },
  }),
  { index: 1 }
);

export const usePrimaryStyles = makeStyles(
  () => ({
    logo: {
      height: "40px",
      width: "27.5px",
    },
    gridContainer: {
      padding: "48px 0 32px 0",
      margin: 0,
      width: "100%",
    },
  }),
  { index: 1 }
);

export const useSecondaryStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    buttonText: {
      color: palette.action.active,
    },
    folder: {
      background: palette.background.paper,
      boxShadow: "0px 1px 8px -4px rgba(37, 46, 65, 0.08)",
      borderRadius: "6px",
      height: "64px",
      marginBottom: "32px",
      padding: "20px 28px",
    },
    folderText: {
      alignItems: "center",
      display: "flex",
      gap: "13.7px",
    },
    flexWrapper: {
      alignItems: "center",
      display: "flex",
      [breakpoints.down("sm")]: {
        alignItems: "flex-start",
        flexDirection: "column",
      },
    },
  }),
  { index: 1 }
);
