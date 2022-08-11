import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints, palette, shape }) => ({
    root: {
      paddingTop: "48px",
      paddingBottom: "24px",
      minHeight: "calc(100vh - 198px)",
      [breakpoints.down("xs")]: {
        paddingTop: "24px",
      },
    },
    gridContainer: {
      marginTop: "12px",
    },
    horizontalFlexWrapper: {
      display: "flex",
      gap: "10px",
      [breakpoints.down(350)]: {
        gap: "6px",
      },
    },
    verticalFlexWrapper: {
      border: `1px solid ${palette.divider}`,
      borderRadius: shape.borderRadius,
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      marginBottom: "24px",
      padding: "16px",
      [breakpoints.down(350)]: {
        padding: "10px",
      },
    },
    switch: {
      marginLeft: "auto !important",
    },
  }),
  { index: 1 }
);
