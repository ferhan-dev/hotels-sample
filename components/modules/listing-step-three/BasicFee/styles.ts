import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints, palette, shape }) => ({
    root: {
      paddingTop: "48px",
      paddingBottom: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      minHeight: "calc(100vh - 198px)",
      [breakpoints.down("xs")]: {
        paddingTop: "24px",
      },
    },
    optionalFieldsWrapper: {
      border: `1px solid ${palette.divider}`,
      borderRadius: shape.borderRadius,
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      padding: "20px",
      [breakpoints.down(350)]: {
        padding: "10px",
      },
    },
  }),
  { index: 1 }
);
