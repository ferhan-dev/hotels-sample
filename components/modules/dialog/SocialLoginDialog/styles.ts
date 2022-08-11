import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    nameWrapper: {
      display: "flex",
      gap: "1rem",
      [breakpoints.down("xs")]: {
        flexDirection: "column",
        gap: 0,
      },
    },
    socialButton: {
      border: `1px solid ${palette.divider}`,
      color: `${palette.action.active} !important`,
    },
  }),
  { index: 1 }
);
