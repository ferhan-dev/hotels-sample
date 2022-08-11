import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette }) => ({
    socialButton: {
      border: `1px solid ${palette.divider}`,
      color: `${palette.action.active} !important`,
    },
  }),
  { index: 1 }
);
