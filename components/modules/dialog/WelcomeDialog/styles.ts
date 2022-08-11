import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    emoji: {
      height: "22px",
      width: "22px",
      [breakpoints.down("xs")]: {
        height: "20px",
        width: "20px",
      },
    },
    socialButton: {
      border: `1px solid ${palette.divider}`,
      color: `${palette.action.active} !important`,
    },
  }),
  { index: 1 }
);
