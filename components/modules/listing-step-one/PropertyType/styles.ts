import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
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
    title: {
      color: palette.grey[900],
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "-0.03em",
      marginBottom: "24px",
    },
  }),
  { index: 1 }
);
