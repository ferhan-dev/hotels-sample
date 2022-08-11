import { makeStyles } from "@material-ui/core";

export const useNavbarStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "24px",
      marginBottom: "32px",
      [breakpoints.down("xs")]: {
        flexDirection: "column-reverse",
        gap: "16px",
      },
    },
    icon: {
      fontSize: "19px !important",
    },
    iconBtn: {
      alignItems: "center",
      display: "flex",
      height: "32px",
      justifyContent: "center",
      padding: 0,
      width: "32px",
    },
    monthWrapper: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      height: "32px",
      maxWidth: "472px",
      flexGrow: 1,
      [breakpoints.down("xs")]: {
        width: "100%",
      },
    },
  }),
  { index: 1 }
);
