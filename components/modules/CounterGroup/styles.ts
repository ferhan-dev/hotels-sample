import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette }) => ({
    btn: {
      color: palette.grey[600],
      marginRight: "20px",
      height: "40px",
      padding: 0,
      width: "119px",
    },
    flexWrapper: {
      alignItems: "center",
      border: `1px solid ${palette.divider}`,
      borderRadius: "6px",
      display: "flex",
      justifyContent: "space-between",
      minHeight: "56px",
      paddingLeft: "16px",
    },
  }),
  { index: 1 }
);

export const useDialogStyles = makeStyles(
  () => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "20px",
    },
  }),
  { index: 2 }
);
