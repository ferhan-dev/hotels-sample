import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      paddingTop: "48px",
      paddingBottom: "24px",
      minHeight: "calc(100vh - 198px)",
      [breakpoints.down("xs")]: {
        paddingTop: "24px",
      },
    },
    flexWrapper: {
      display: "flex",
      flexDirection: "column",
      gridGap: "16px",
    },
    select: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      "& > div": {
        minWidth: "96px",
        margin: 0,
      },
      "& .MuiSelect-root": {
        padding: "8px 16px",
      },
    },
  }),
  { index: 1 }
);
