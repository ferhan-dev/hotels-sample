import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette }) => ({
    regionDialogWrapper: {
      overflowY: "auto",
    },
    socialButton: {
      border: `1px solid ${palette.divider}`,
      color: `${palette.action.active} !important`,
    },
    regionOptionsContainer: {
      display: "flex",
      flexWrap: "nowrap",
      marginTop: "12px",
      marginBottom: "24px",
    },
    regionItemContainer: {
      display: "flex",
      flex: "0 0 50%",
      maxWidth: "50%",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "24px 16px",
      background: "#FFFFFF",
      border: "1px solid #EAEEF5",
      borderRadius: "6px",
      "& p": {
        display: "flex",
        alignItems: "center",
        color: "#364259",
      },
      "&:last-child": {
        marginLeft: "8px",
      },
      "&:first-child": {
        marginRight: "8px",
      },
    },
    regionOptionsContainerSM: {
      flex: "0 0 100%",
      maxWidth: "100%",
      "&:last-child": {
        marginLeft: 0,
        marginTop: "12px",
      },
      "&:first-child": {
        marginRight: 0,
      },
    },
    flagIcon: {
      marginRight: "14px",
      color: "#364259",
    },
    checkIcon: {
      width: "12px",
      height: "12px",
      color: "#1DAF92",
    },
    amenitiesButton: {
      display: "flex",
      flex: " 0 0 100%",
      maxWidth: "100%",
      // borderTop: "1px solid #EAEEF5",
      // paddingTop: "15px",
      // justifyContent: "flex-end",
    },
    amenitiesButtonCancel: {
      padding: "8px 16px",
      width: "100%",
      maxWidth: "50%",
      flex: "0 0 50%",
      height: "40px",
      border: "1px solid #EAEEF5",
      boxSizing: "border-box",
      borderRadius: "24px",
      marginRight: "10px",
    },
    amenitiesButtonApply: {
      padding: "8px 16px",
      width: "100%",
      maxWidth: "50%",
      flex: "0 0 50%",
      height: "40px",
      background: "#1DAF92",
      borderRadius: "24px",
      "& span": { color: "white" },
    },
  }),
  { index: 1 }
);
