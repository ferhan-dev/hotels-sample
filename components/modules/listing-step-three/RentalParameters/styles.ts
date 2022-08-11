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
    checkbox: {
      flexDirection: "column-reverse",
      gap: "4px",
    },
    horizontalFlexWrapper: {
      display: "flex",
      gap: "24px",
      [breakpoints.down("xs")]: {
        flexWrap: "wrap",
        gap: "16px",
      },
      [breakpoints.down(330)]: {
        gap: "12px",
      },
    },
    horizontalSelect: {
      [breakpoints.up("sm")]: {
        gap: "24px",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        "& > div": {
          width: "96px",
          margin: 0,
        },
      },
    },
    verticalFlexWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    verticalSelect: {
      [breakpoints.down("xs")]: {
        flexBasis: "100%",
      },
    },
  }),
  { index: 2 }
);
