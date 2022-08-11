import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    btnGroupWrapper: {
      alignItems: "center",
      border: `1px solid ${palette.divider}`,
      borderRadius: "20px",
      display: "flex",
      gap: "4px",
      padding: "0 4px",
      [breakpoints.down("xs")]: {
        justifyContent: "space-between",
        width: "100%",
      },
    },
    flexWrapper: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      gap: " 16px",
    },
    iconBtn: {
      padding: 0,
      height: "40px",
      minWidth: "40px",
    },
    label: {
      [breakpoints.down("xs")]: {
        margin: "0 0 4px 0",
      },
    },
    text: { minWidth: "48px", textAlign: "center" },
  }),
  { index: 1 }
);
