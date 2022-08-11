import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1600px",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    paddingTop: "48px",
    paddingBottom: "24px",
    minHeight: "calc(100vh - 198px)",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "24px",
    },
  },
  personalInfo: {
    boxShadow: "0px 1px 0px #eaeef5",
    paddingTop: "24px",
    "& h6": {
      fontSize: "18px",
      color: "#090F1B",
    },
  },
  leftArrow: {
    width: "12px",
    height: "12px",
    marginRight: "30px",
    marginLeft: "40px",
    [theme.breakpoints.down(576)]: {
      marginLeft: "10px",
    },
  },
  photosGalleryMain: {
    paddingTop: "40px",
  },
  accordionHead: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#1A2232",
    letterSpacing: "0.2px",
  },
  outdooraccordion: {
    boxShadow: "0px 1px 0px #eaeef5",
    "& .MuiAccordionDetails-root": {
      [theme.breakpoints.down(375)]: {
        padding: "8px 12px 16px",
      },
    },
  },
  accordionSummary: {
    padding: "14px 16px",
  },
  outdoorFeature: {
    display: "flex",
    alignItems: "center",
    flexFlow: "wrap",
    width: "100%",
  },
  outdoor: {
    display: "flex",
    alignItems: "center",
    margin: "8px 0px",
    padding: " 4px 0px",
  },
  outdoorTitle: {
    fontSize: "14px",
    letterSpacing: "-0.02em",
  },
  outdoorIcon: {
    overflow: "initial",
    "& img": {
      width: "30px",
      height: "40px",
      marginRight: "12px",
      objectFit: "contain",
    },
  },
  pitIcon: {
    "& img": {
      width: "15px",
      height: "23px",
      marginRight: "12px",
      objectFit: "contain",
    },
  },
}));
