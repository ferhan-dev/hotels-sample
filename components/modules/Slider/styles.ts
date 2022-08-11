import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    root: {
      position: "relative",
    },
    btn: {
      background: `${palette.background.paper} !important`,
      boxShadow:
        "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
      position: "absolute",
      height: "64px",
      top: "35%",
      width: "64px",
      zIndex: 200,
    },
    SliderItem: {
      [breakpoints.down(769)]: {
        overflowX: "scroll",  
      },
    
    },
    displayNone: {
      [breakpoints.down(769)]: {
        display: "none",
      },
    },
    nextBtn: {
      [breakpoints.up("lg")]: {
        right: "156px",
      },
      right: 0,
    },
    prevBtn: {
      left: 0,
    },
  }),
  { index: 1 }
);
