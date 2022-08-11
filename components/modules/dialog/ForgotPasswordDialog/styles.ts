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
    emailField: {
      width: "100%",
      marginBottom: "20px",
      marginTop: "3px",
      "& .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #EAEEF5",
      },
      "& label": {
        color: "#9AA7C1",
        fontWeight: 400,
      },
    },
    emaillabel: {
      fontWeight: 500,
      letterSpacing: " -0.016em",
      "& span": {
        color: " #1DAF92",
      },
    },
  }),
  { index: 1 }
);
