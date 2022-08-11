import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette, shape }) => ({
    root: {
      display: "flex",
      gap: "4px",
    },
    flag: {
      height: "20px",
      margin: "0 10px  auto",
      width: "20px",
    },
    flexWrapper: {
      border: `1px solid ${palette.divider}`,
      borderRadius: shape.borderRadius,
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "4px 12px 4px 4px",
    },
    icon: {
      right: "12px",
      top: "calc(50% - 7px)",
    },
    input: {
      height: "40px",
      flexGrow: 1,
      "& input": {
        border: "none",
      },
    },
    select: {
      height: "40px",
      width: "64px",
      padding: 0,
      "& input": {
        border: "none",
      },
    },
  }),
  { index: 1 }
);
